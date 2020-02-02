import React from 'react'

function AbsoluteComp(props) {
    return (
        <button className={"absolute-div " + props.type} type="submit" onClickCapture={props.shareHandler}>
            <span className="text-right">
                {(props.type === 'code' ? <i className="fas fa-code"></i> : ((props.type === 'memo') ? <img src={props.display} alt={props.type + "-logo"}/> : <span>1 day</span>))}
            </span>
        </button> 
    )
}

export default AbsoluteComp
