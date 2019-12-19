#!/bin/bash

PKG_SUM=$(md5sum package.json | cut -d\  -f 1)
NPM_TARBALL=node_modules-${PKG_SUM}.tgz
NPM_TARBALL_MD5SUM=${NPM_TARBALL}.md5sum
NPM_TARBALL_CACHE=${HOME}/.cache/npmtarball
NFS_NPM_TARBALL=/nfs_exports/node_modules
TARBALL=${NPM_TARBALL_CACHE}/${NPM_TARBALL}

[[ ! -e ${NPM_TARBALL_CACHE} ]] && mkdir -p ${NPM_TARBALL_CACHE}

function downloadNpmTarball(){
    pushd ${NPM_TARBALL_CACHE}
        if [[ ! -f ${NPM_TARBALL} ]];then
            cp ${NFS_NPM_TARBALL}/${NPM_TARBALL} ${NPM_TARBALL}
            cp ${NFS_NPM_TARBALL}/${NPM_TARBALL_MD5SUM} ${NPM_TARBALL_MD5SUM}
            md5sum -c ${NPM_TARBALL_MD5SUM} || rm -f ${NPM_TARBALL} ${NPM_TARBALL_MD5SUM}
        fi
    popd
}

function checkNpmMod() {
    downloadNpmTarball
    [[ -f ${TARBALL} ]] && tar xzf ${TARBALL}
}

function uploadNpmMod() {
    if [[ ! -f  ${TARBALL} ]];then
        if [[ -d node_modules ]];then
             tar zcf ${TARBALL} node_modules || return 1
        fi
        pushd ${NPM_TARBALL_CACHE}
             md5sum ${NPM_TARBALL} > ${NPM_TARBALL_MD5SUM}
             cp ${NPM_TARBALL} ${NFS_NPM_TARBALL}/${NPM_TARBALL}
             cp ${NPM_TARBALL_MD5SUM} ${NFS_NPM_TARBALL}/${NPM_TARBALL_MD5SUM}
        popd
    fi
}

checkNpmMod
npm install
uploadNpmMod
