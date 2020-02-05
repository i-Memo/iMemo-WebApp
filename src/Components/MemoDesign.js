import React, {useState, useEffect} from 'react'
import renderHTML from 'react-render-html'
import memo from '../LightMode/memo.png'
import AbsoluteComp from './AbsoluteComp'

function MemoDesign(props) {
    const [title, settitle] = useState(props.element.title)
    const [body, setbody] = useState(props.element.body)

    const titleChange = () => {
        if(props.element.title.indexOf(props.search) !== -1 && props.search !== ''){
            settitle(props.element.title.replace(props.search, `<span className=${props.Theme ? "search-dark" : "search"}>${props.search}</span>`))
        }
    }
    const bodyChange = () => {
        if(body.length > 200)  setbody(body.substring(0, 200))
    }
    const shareHandler = (event) => {
        console.log(title + "\n" + props.element.body);
    }
    const getType = (value) => {
        if(value % 2 === 0) return true
        return false
    }
    // const bodyChange = () => {
    //     if(props.element.body.indexOf(props.search) != -1){
    //         setbody(props.element.body.replace(props.search, `<span className=${props.Theme ? "search-dark" : "search"}</span>}>${props.search}</span>`))
    //     }
    // }
    useEffect(() => {
        titleChange()
        bodyChange()
    })
    return (
        <React.Fragment>
            {/* {props.element.id}
            {props.element.title}
            {props.type}
            {props.text}
            {props.createdDate}
            {props.time} */}
            <div className="outer-d">
            <div className={"memoBtn " + (props.Theme ? "lightmode-button text-black" : "darkmode-button text-white")} onClick={() => {props.setcmemo(true); props.setvalue(props.element)}}>
                    <span className="text-left">{renderHTML(title)}</span>
                    <br/><br/>
                    <span className="text-body text-lightblack">{body} ...</span><br/><br/>
                    <span className="creation">{props.element.id}/{props.element.id}/{props.element.userId}  13:15:45</span>
                    {
                        (getType(props.element.userId) ? <AbsoluteComp type="memo" shareHandler={shareHandler} display={memo} Theme={props.Theme}/> : <AbsoluteComp type="code" shareHandler={shareHandler} display={''} Theme={props.Theme}/>)
                    }
                    <button className="absolute-div rem" type="submit" onClickCapture={shareHandler}>
                    <span className="text-right">
                        <span>10:58</span>
                    </span>
                    </button> 
            </div>
            <button className="inner-delete"><i className="fas fa-trash"></i></button>
            </div>
        </React.Fragment>
    )
}

export default MemoDesign
