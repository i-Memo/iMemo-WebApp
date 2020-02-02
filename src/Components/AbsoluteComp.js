import React from 'react'
//  + (props.Theme ? (" " + props.type + "light") : " dark")
function AbsoluteComp(props) {
    return (
        <button className={"absolute-div " + props.type + " " + props.type + (props.Theme ? "light" : "dark")} type="submit" onClickCapture={props.shareHandler}>
            <span className="text-right">
                {(props.type === 'code' ? <i className="fas fa-code"></i> : <img src={props.display} alt={props.type + "-logo"}/>)}
            </span>
        </button> 
    )
}

export default AbsoluteComp
