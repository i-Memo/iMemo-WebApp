import React, {useState, useEffect} from 'react'
import renderHTML from 'react-render-html'
import memo from '../LightMode/memo.png'
import reminder from '../LightMode/reminder.png'
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
            <div>
            <div className={"memoBtn " + (props.Theme ? "lightmode-button text-black" : "darkmode-button text-white")} onClick={() => {props.setcmemo(true); props.setvalue(props.element)}}>
                    <span className="text-left">{renderHTML(title)}</span><br/><br/>
                    {/* <span className="text-right code" style={{marginLeft : -0.1 + 'rem'}}><i className="fas fa-code"></i></span>
                    <span className="text-right memo"><img src={memo} height="22px" alt="m-logo"/></span>
                    <span className="text-right rem"><i className="fas fa-bell"></i></span>
                    <br/><br/> */}
                    <span className="text-body text-lightblack">{body} ...</span><br/><br/>
                    <span className="creation">{props.element.id}/{props.element.id}/{props.element.userId}  13:15:45</span>
                    {/* <AbsoluteComp type="rem" shareHandler={shareHandler} display={reminder}/> */}
                    {/* <AbsoluteComp type="memo" shareHandler={shareHandler} display={memo}/> */}
                    <AbsoluteComp type="code" shareHandler={shareHandler} display={''}/>
            </div>
            </div>
        </React.Fragment>
    )
}

export default MemoDesign
