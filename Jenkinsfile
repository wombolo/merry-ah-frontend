pipeline {
    agent any

    tools {nodejs "nodejs"}

    stages {

        stage('Checkout repo') {
            steps {
                git branch: 'demo',  url: 'https://github.com/andela/merry-ah-frontend'
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}