import React from 'react'

function FilesComponent(props) {
    return (
        <div className={"create-files " + (props.Theme ? "dim-white" : "dark-background")}>
            {props.links.map((el, index) => <React.Fragment>&nbsp;<a href="#" className={props.Theme ? 'text-black' : 'text-white'}>testfile.txt</a><br/></React.Fragment>)}
        </div>
    )
}

export default FilesComponent
