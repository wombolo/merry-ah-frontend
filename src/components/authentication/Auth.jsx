import React from 'react'
import Login from './Login';
import '../../assets/auth.scss';
export default function Auth() {
  return (
<div id="page-background">
<div className="container">
    <div className="row">
        <div className="col-md-8 col-sm-12">
            &nbsp;
        </div>
        
        <div className="col-md-4 mt-4 col-sm-12 pb-5" id="auth-background">

            <div className="row">       
            <ul className="nav nav-pills mb-3 w-100 text-center" id="pills-tab" role="tablist">
                <li className="nav-item col-sm-6 p-0">
                    <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-home" aria-selected="true">Login</a>
                </li>
            </ul>
                
            </div>

            <div className="tab-content" id="pills-tabContent">
              <Login />
                <div className="row">
                    <div className="col-3 offset-1 text-center"><div className="auth-icons facebook-square">&nbsp;</div></div>
                    
                    <div className="col-3 offset-1 text-center"><div className="auth-icons twitter-square">&nbsp;</div></div>
                    
                    <div className="col-3 offset-1 text-center"><div className="auth-icons google-plus-square">&nbsp;</div></div>
                            
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}
