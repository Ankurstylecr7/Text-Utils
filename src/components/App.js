
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
// } from "react-router-dom";
  
 


function App() {
  const [mode,setmode]=useState('light')
  const [color,setcolor]=useState('black');
  const [alert,setalert]=useState(null);

  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },1500)
  }

  const toggleMode=()=>{
    if(mode==='light' && color==='black'){
      setmode('dark')
      setcolor('white')
      document.body.style.backgroundColor='grey'
      showalert('Dark mode has been enabled','success')
      document.title='TextUtils - Dark Mode'
      setTimeout(()=>{
        document.title='TextUtils - Home'
      },1500)
      
    }else if(mode==="dark" && color==="white"){
      setmode('light')
      setcolor('black')
      document.body.style.backgroundColor='white'
      showalert('Light mode has been enabled','success')
      document.title='TextUtils - Light Mode'
      setTimeout(()=>{
          document.title='TextUtils - Home'
      },1500)
    }
  }


  const [seccolor,setseccolor]=useState("black")
  const [thirdcolor,setthirdcolor]=useState("black")

  const togglered=()=>{
    if(mode==="light" && seccolor==='black'){
      setseccolor('white')
      setmode('red')
      showalert('Red mode has been enabled','success')
      document.body.style.backgroundColor='red'
    }else if(mode==="red" && seccolor==="white"){
      setseccolor('black')
      setmode('light')
      showalert('Light mode has been enabled','success')
      document.body.style.backgroundColor='white'
    }
  }
  const toggleblue=()=>{
    if(thirdcolor==='black' && mode==="light"){
      setthirdcolor('white')
      setmode('blue')
      showalert('Blue mode has been enabled','success')
      document.body.style.backgroundColor='blue'
    }else if(mode==="blue" && thirdcolor==="white"){
      setthirdcolor('black')
      setmode('light')
      showalert('Light mode has been enabled','success')
      document.body.style.backgroundColor='white'
    }
  }

  
  return (
    <>
    {/*  <BrowserRouter> */}
    {/* <Navbar title="TextUtils2"  aboutText="About us"> */}
    <Navbar mode={mode} toggleMode={toggleMode}aboutText={"About"} togglered={togglered} toggleblue={toggleblue} seccolor={seccolor} thirdcolor={thirdcolor} colour={color}>
    </Navbar>
    <Alert alert={alert} mode={mode}></Alert>
    <div className="container my-3" >
     {/* <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/"> */}
           <TextForm heading="Enter the Heading" mode={mode} showalert={showalert} ></TextForm>
        {/* </Route>
      </Switch> */}
    </div> 
    {/* </BrowserRouter> */}

    </>
  );
}

export default App;
