import React,{useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import SliderComp from './SliderComp';
import DateComponent from './DateComponent';
import LinksComponent from './LinksComponent';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-ejs";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-twilight";
import "ace-builds/src-noconflict/theme-eclipse";

function CreateMemo(props) {
    const [code, setcode] = useState(false)
    const [rem, setrem] = useState(false)
    const [web, setweb] = useState(false)
    const [links, setlinks] = useState([])
    const [language, setlanguage] = useState('javascript')
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
            mode={language}
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
        {web ? <LinksComponent links={links} setlinks={setlinks}/> : ''}    

        <div className={"create-memo " + (props.Theme ? "create-memo-light-bg" : "dark-create-memo-bg text-white")}>
        <input placeholder="Title" name="title" className={props.Theme ? "white create-memo-db input" : "black text-white create-memo-db input"} value={props.value.title} onChange={titleChange}/>
            
        
        {code ? <div className="div-create"></div> : <textarea id="text-area" value={props.value.body} onChange={bodyChange} placeholder="Your text goes here" className={props.Theme ? "white" : "black text-white"}/>}
        Code :&nbsp;
        <SliderComp extraOuterClass="small-switch" extraInnerClass="small-bg" id="toggle-code" setfunction={() => {setcode(!code);}}/>&nbsp;
        {code ? <select className="code-select" value={language} onChange={(e) => setlanguage(e.target.value)}>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="javascript">JavaScript</option>
            <option value="ejs">ejs</option>
            <option value="c_cpp">C++</option>
            <option value="html">HTML</option>
        </select> : ''}&nbsp;
        Remainder :&nbsp;
        <SliderComp extraOuterClass="small-switch" extraInnerClass="small-bg" id="toggle-remainder" setfunction={() => {setrem(!rem)}}/>&nbsp;
        {rem ? <DateComponent/> : ''}&nbsp;
        Links :&nbsp;
        <button className="attach-links" id="toggle-web" onClick={() => {setweb(!web);}}><i className="fas fa-link"></i></button>&nbsp;&nbsp;
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
