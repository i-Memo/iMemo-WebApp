import React,{useState, useEffect, useRef} from 'react'
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
import FilesComponent from './FilesComponent';

function CreateMemo(props) {
    const [code, setcode] = useState(false)
    const [rem, setrem] = useState(false)
    const [web, setweb] = useState(false)
    const [links, setlinks] = useState([])
    const [file, setfile] = useState(false)
    const [language, setlanguage] = useState('javascript')
    const [copySuccess, setCopySuccess] = useState('');
    const textAreaRef = useRef(null);

    const copyToClipboard = (e) => {
        textAreaRef.current.onCopy()
        // textAreaRef.current.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the the whole text area selected.
        e.target.focus();
        setCopySuccess('Copied!');
    };

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
        <div className="outer-d">
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
            ref={textAreaRef}
            /> : ''}
        {web ? <LinksComponent links={links} setlinks={setlinks} Theme={props.Theme}/> : ''}    
        {file ? <FilesComponent links={links} setlinks={setlinks} Theme={props.Theme}/> : ''}    

        <div className={"create-memo " + (props.Theme ? "create-memo-light-bg" : "dark-create-memo-bg text-white")}>
        <input placeholder="Title" name="title" className={props.Theme ? "white create-memo-db input" : "black text-white create-memo-db input"} value={props.value.title} onChange={titleChange}/>
            
        
        {code ? <div className="div-create"></div> : <textarea ref={textAreaRef} id="text-area" value={props.value.body} onChange={bodyChange} placeholder="Your text goes here" className={props.Theme ? "white" : "black text-white"}/>}
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
        &nbsp;
        <button className="attach-links" id="toggle-web" onClick={() => {setweb(!web); setfile(false);}}><i className="fas fa-link"></i></button>&nbsp;&nbsp;
        &nbsp;
        <button className="file-upload" id="toggle-file" onMouseEnter={() => {setfile(!file); setweb(false);}}><i className="fas fa-file-upload"></i></button>&nbsp;&nbsp;
        <br/>
        <button type="submit" className="save-btn">Save</button>&nbsp;
        <button onClick={closeCreate} className="close-btn">Cancel</button>&nbsp;
        <button className="share-btn" type="submit">
            <i className="fas fa-share-square"></i>
        </button>&nbsp;
        <button className="share-btn" type="submit">
            <i className="fas fa-file-download"></i>
        </button>&nbsp;
        <button className="copy-btn" type="submit" onClick={copyToClipboard}>
            <i className="fas fa-copy"></i>
        </button>{copySuccess}
        </div>
        </div>, document.getElementById('createMemo')
    )
}

export default CreateMemo
