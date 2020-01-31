import React, {useState, useEffect} from 'react'
import renderHTML from 'react-render-html'
import memo from '../LightMode/memo.png'

function MemoDesign(props) {
    const [title, settitle] = useState(props.element.title)
    const [body, setbody] = useState(props.element.body)
    const titleChange = () => {
        if(props.element.title.indexOf(props.search) != -1){
            settitle(props.element.title.replace(props.search, `<span className=${props.Theme ? "search-dark" : "search"}>${props.search}</span>`))
        }
    }
    // const bodyChange = () => {
    //     if(props.element.body.indexOf(props.search) != -1){
    //         setbody(props.element.body.replace(props.search, `<span className=${props.Theme ? "search-dark" : "search"}</span>}>${props.search}</span>`))
    //     }
    // }
    useEffect(() => {
        titleChange()
    })
    return (
        <li className="memoLi" key={props.element.id}>
            {/* {props.element.id}
            {props.element.title}
            {props.type}
            {props.text}
            {props.createdDate}
            {props.time} */}
            <button className={"memoBtn " + (props.Theme ? "lightmode-button text-black" : "darkmode-button text-white")} onClick={() => {props.setcmemo(true); props.setvalue(props.element)}}>
                <div>
                    <span className="text-left">{renderHTML(title)}</span><br/><br/>
                    <span className="text-right code" style={{marginLeft : -0.1 + 'rem'}}><i class="fas fa-code"></i></span>
                    <span className="text-right memo"><img src={memo} height="22px"/></span>
                    <span className="text-right rem"><i class="fas fa-bell"></i></span>
                    <br/><br/>
                    <span className="text-body text-lightblack">{body} ...</span><br/><br/>
                    <span className="creation">{props.element.id}/{props.element.id}/{props.element.userId}  13:15:45</span>
                </div>
            </button>
        </li>
    )
}

export default MemoDesign
