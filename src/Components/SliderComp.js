import React from 'react'

function SliderComp(props) {
    return (
        <React.Fragment>
            <label className={"switch " + props.extraOuterClass} id={props.id} onChange={props.setfunction}>
                <input type="checkbox"/>
                <span className={"slider " + props.extraInnerClass + " round"}></span>
            </label>
        </React.Fragment>
    )
}

export default SliderComp
