import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import './DarkMode/DarkMode.css'
import './LightMode/LightMode.css'

function footerApp(props) {
    return ReactDOM.createPortal(
        <div className={props.Theme ? "white" : "dark-background"}>
            <img className="logo-p" src="LRT2.PNG" alt="L N S S Ravi Teja"/>
            <img className="logo-p" src="MSR.PNG" alt="A Mano Sri Ram"/>
            {/* <p className={"float-right text-white black"}>Made by <span className="italic">L N S S Ravi Teja & A Mano Sri Ram</span> @ <span className="styling-memo">iMemo</span></p> */}
        </div>, document.getElementById('footer')
    )
}

export default footerApp
