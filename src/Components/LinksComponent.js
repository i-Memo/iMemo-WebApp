import React from 'react'

function LinksComponent(props) {
    return (
        <div className="create-links">
            {props.links.map((el, index) => <React.Fragment><input type="text" name={"link" + index} className={"web-links" + (props.Theme ? " weblinks-input" : " darkmode-button text-white")}/>&nbsp;<a href={el} target="_blank" rel="noopener noreferrer"><i className="fas fa-paper-plane"></i></a><br/></React.Fragment>)}
            <button type="submit" onClick={() => {let arr = props.links; arr.push(''); props.setlinks(arr);}} className="links-add-button"><i className={"fas fa-plus" + (props.Theme ? " text-blue" :" text-white")}></i></button>
        </div>
    )
}

export default LinksComponent
