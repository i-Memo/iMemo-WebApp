import React, {useState ,useEffect} from 'react'

function LinksComponent(props) {
    const [select, setselect] = useState(-1)
    const [link, setlink] = useState('')
    useEffect(() => {
        props.setlinks(props.links)
    })
    const linkchange = (event) => {
        console.log(event.target.value + " " + select);
    }
    return (
        <div className={"create-links " + (props.Theme ? "dim-white" : "dark-background")}>
            {props.links.map((el, index) => <React.Fragment>&nbsp;<input type="text" name={"link" + index} className={"web-links" + (props.Theme ? " weblinks-input" : " darkmode-button text-white")} value={(select === index) ? link : props.links[index]} onChange={(e) => {setlink(e.target.value)}} onClick={(e) => {setselect(index); setlink(e.target.value);}}/>&nbsp;<a href={el} target="_blank" rel="noopener noreferrer"><i className="fas fa-paper-plane"></i></a><br/></React.Fragment>)}
            <button type="submit" onClick={async () => {let arr = props.links; arr.push(''); props.setlinks(arr); await props.setweb(false); await props.setweb(true);}} className="links-add-button"><i className={"fas fa-plus" + (props.Theme ? " text-blue" :" text-white")}></i></button>
        </div>
    )
}
export default LinksComponent
