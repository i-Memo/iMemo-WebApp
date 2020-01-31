import React, {useState} from 'react'
import './LightMode/LightMode.css';
import './DarkMode/DarkMode.css';
import MemoDesign from './Components/MemoDesign';

function MainPage(props) {
    const [search, setsearch] = useState('')
    const createMemo = () => {
        props.setcmemo(true);
    }
    const displayMemo = (event) => {
        setsearch(event.target.value)        
    }
    return (
        <div className={props.Theme ? "white" : "dark-background text-white"}>
        <input className={"search-button" + (props.Theme ? " lightmode-button text-black" : " darkmode-button text-white")} placeholder="Search Memo" onChange={displayMemo}/>
        <div className="App">
        <button className={"button " + (props.Theme ? "lightmode-button text-lightblack" : "darkmode-button")} onClick={createMemo}>
        <span><i className="fas fa-pen"></i>New Memo</span></button>
        </div>
        <ul className="memoList">
        {props.store.map(el => {
            if(el.title.indexOf(search) !== -1 || el.body.indexOf(search) !== -1){
                return <MemoDesign element={el} Theme={props.Theme} search={search}/>
            } else {
                return ''
            }
        }) }
        </ul>
        </div>
    )
}

export default MainPage