import React,{useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import SliderComp from './SliderComp';
import DateComponent from './DateComponent';
import LinksComponent from './LinksComponent';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-eclipse";

function CreateMemo(props) {
    const [code, setcode] = useState(false)
    const [rem, setrem] = useState(false)
    const [web, setweb] = useState(false)
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
    const codeChange = (event) => {
        props.setvalue({...props.value, body: event})
    }
    useEffect(() => {
        document.addEventListener("keydown", keyHandler, false);
        return () => {
            document.removeEventListener("keydown", keyHandler, false);

        };
    })
    return ReactDOM.createPortal(
        <div>
            {code ? <AceEditor
            mode="java"
            theme={props.Theme ? "eclipse" : "twilight"}
            focus={true}
            name="UNIQUE_ID_OF_DIV"
            value={props.value.body}
            onChange={codeChange}
            placeholder="//Your code goes here"
            editorProps={{ $blockScrolling: Infinity }}
            className="code-editor"
            width="80%"
            height="50%"
            /> : ''}    
        <div className={"create-memo " + (props.Theme ? "create-memo-light-bg" : "dark-create-memo-bg text-white")}>
        <input placeholder="Title" name="title" className={props.Theme ? "white create-memo-db input" : "black text-white create-memo-db input"} value={props.value.title} onChange={titleChange}/>
            
        {web ? <LinksComponent links={links} setlinks={setlinks}/> : '' }
        {code ? <div className="div-create"></div> : <textarea id="text-area" value={props.value.body} onChange={bodyChange} placeholder="Your text goes here" className={props.Theme ? "white" : "black text-white"}/>}
          
        Code :&nbsp;
        <SliderComp extraOuterClass="small-switch" extraInnerClass="small-bg" id="toggle-code" setfunction={() => {setcode(!code);}}/>&nbsp;
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
        <br/>
        <button type="submit" className="save-btn">Save</button>&nbsp;
        <button onClick={closeCreate} className="close-btn">Cancel</button>&nbsp;
        <button className="share-btn" type="submit">
            <i className="fas fa-share-square"></i>
        </button>&nbsp;
        <button className="share-btn" type="submit">
            <i className="fas fa-file-download"></i>
        </button>
        </div>
        </div>, document.getElementById('createMemo')
    )
}

export default CreateMemo
