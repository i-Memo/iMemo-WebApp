import React,{useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import SliderComp from './SliderComp';
import DateComponent from './DateComponent';

function CreateMemo(props) {
    const [code, setcode] = useState(false);
    const [rem, setrem] = useState(false);
    const [web, setweb] = useState(false);
    const [links, setlinks] = useState([])
    const keyHandler = (e) => {
        if(e.keyCode===83 && e.ctrlKey) {
            e.preventDefault() ;
            alert(props.value.title + "\n" + props.value.body.substring(0,20) + "...");
        }
        else if(e.keyCode === 27){
            props.setcmemo(false);
            props.setvalue({title: ''})
        }
    }
    const closeCreate = () => {
        props.setcmemo(!props.cmemo);
        props.setvalue({title: ''})
    }
    const titleChange = (event) => {
        props.setvalue({...props.value, title: event.target.value})
    }
    const bodyChange = (event) => {
        props.setvalue({...props.value, body: event.target.value})
    }
    useEffect(() => {
        document.addEventListener("keydown", keyHandler, false);
        return () => {
            document.removeEventListener("keydown", keyHandler, false);
        };
    })
    return ReactDOM.createPortal(
        <form className={"create-memo " + (props.Theme ? "create-memo-light-bg" : "dark-create-memo-bg text-white")} onSubmit={(event) => {event.preventDefault(); alert(props.value.title + " " + props.value.body)}}>
        <input placeholder="Title" name="title" className={props.Theme ? "white create-memo-db input" : "black text-white create-memo-db input"} value={props.value.title} onChange={titleChange}/>
        {web ? <div className="div-create">
            <div className="div-input">
            {links.map((el, index) => <React.Fragment><input type="text" name={"link" + index} className={"web-links" + (props.Theme ? " weblinks-input" : " darkmode-button text-white")}/><a href={el} target="_blank" rel="noopener noreferrer"><i class="fas fa-paper-plane"></i></a><br/></React.Fragment>)}
            <button type="button" onClick={() => {links.push(''); setlinks(links)}} className="links-add-button"><i class={"fas fa-plus" + (props.Theme ? " text-blue" :" text-white")}></i></button>
            </div>
            </div> : 
        <textarea name="body" value={props.value.body} onChange={bodyChange} placeholder="Your Text goes here" className={props.Theme ? "white" : "black text-white"}/>
        }&nbsp;
        Code :&nbsp;
        <SliderComp extraOuterClass="small-switch" extraInnerClass="small-bg" id="toggle-code" setfunction={() => {setcode(!code)}}/>&nbsp;
        {code ? <select className="code-select">
            <option>Python</option>
            <option>Java</option>
            <option>JavaScript</option>
            <option>C</option>
            <option>C++</option>
        </select> : ''}&nbsp;
        Remainder :&nbsp;
        <SliderComp extraOuterClass="small-switch" extraInnerClass="small-bg" id="toggle-remainder" setfunction={() => {setrem(!rem)}}/>&nbsp;
        {rem ? <DateComponent/> : ''}&nbsp;
        Links :&nbsp;
        <SliderComp extraOuterClass="small-switch" extraInnerClass="small-bg" id="toggle-web" setfunction={() => {setweb(!web)}}/>&nbsp;&nbsp;
        <button type="submit" className="save-btn">Save</button>&nbsp;<button onClick={closeCreate} className="close-btn">Cancel</button>
        </form>, document.getElementById('createMemo')
    )
}

export default CreateMemo
