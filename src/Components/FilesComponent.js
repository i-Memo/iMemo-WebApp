import React from 'react'

function FilesComponent(props) {
    return (
        <div className={"create-files " + (props.Theme ? "dim-white" : "dark-background")}>
            {props.links.map((el, index) => <React.Fragment>&nbsp;<a href="#" className={(props.Theme ? 'text-black' : 'text-white') + ' file'}>{el}</a><br/></React.Fragment>)}
            <button className="upload" id="toggle-file" onClick={() => {}}><i className="fas fa-file-upload"></i><span>Upload</span></button>&nbsp;&nbsp;
        </div>
    )
}

export default FilesComponent
