import React, {useState, useEffect} from 'react';
import './App.css';
import './DarkMode/DarkMode.css';
import './LightMode/LightMode.css'
import LoadingPage from './LoadingPage';
import Axios from 'axios';
import MainPage from './MainPage';
import FooterApp from './footerApp';
import CreateMemo from './Components/CreateMemo';

function App() {
  let [Theme, setTheme] = useState(false);
  const [state, setstate] = useState(false);
  const [store, setstore] = useState([]);
  const [loginState, setloginState] = useState(false);
  const [cmemo, setcmemo] = useState(false)
  const toggle = () => {
    setTheme(!Theme);
  }
  const escFunction = (event) => {
      if(event.keyCode === 27){
        setcmemo(false);
      }
  }
  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    const getStore = async () => {
      const res = await Axios('https://jsonplaceholder.typicode.com/posts');
      setstore(res.data);
      console.log(res.data);
    }
    setInterval(() => {
      if(loginState){
        getStore();
        setstate(true);
      }
      return () => {
        document.removeEventListener("keydown", escFunction, false)
      };
    }, 1000);
  }, [loginState])
  return (
    <React.Fragment>
      <label className="switch" id="toggle" onChange={toggle}>
        <input type="checkbox"/>
        <span className="slider round"></span>
      </label>
      {state ? <MainPage Theme={Theme} store={store} setcmemo={setcmemo}/> : <LoadingPage Theme={Theme} loginState={loginState} setloginState={setloginState}/>}
      {cmemo ? <CreateMemo Theme={Theme} setcmemo={setcmemo} cmemo={cmemo}/> : ""}
      <FooterApp Theme={Theme}/>
    </React.Fragment>
  );
}

export default App;
