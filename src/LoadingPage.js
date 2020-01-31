import React from 'react'
import logoLight from './LightMode/LogoLight.PNG';
import loadingLight from './LightMode/loadingLight.jpg';
import logoDark from './DarkMode/LogoDark.PNG';
import loadingDark from './DarkMode/loadingDark.PNG';
import google from './googleLogo.png';
import './LightMode/LightMode.css';
import './DarkMode/DarkMode.css';

function LoadingPage(props) {
    const loginHandler = () => {
        props.setloginState(true);
    }
    return (
        <div className={props.Theme ? "App white" : "App black"}>
        <header className="App-header">
            <img src={props.Theme ? logoLight : logoDark}  alt="logo" className="logo"/>
            {!props.loginState ? <button className="loginBtn" onClick={loginHandler}><img src={google} className="Google-logo"/></button> : <img src={props.Theme ? loadingLight : loadingDark} className="App-logo"/>}
        </header>
        </div>
    )
}

export default LoadingPage
