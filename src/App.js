
import  React,{ useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import About from './component/About';
import { HashRouter as Router, Routes, Route } from "react-router-dom";


function App() {
 const [mode,setmode]=useState('light'); 
 const[alert,setalert]=useState(null);
 const showAlert=(message,type)=>{
  setalert({
    msg:message,
  ty:type
  })
 

 }
 const tooglemode=()=>{
   if(mode==='light'){
      setmode('dark');
     document.body.style.backgroundColor='#014c5b';
     showAlert("Dark mode is enabled","success");
    // document.title='TextUtils-DarkMode'
    setTimeout( ()=>{
     setalert(null)
    },1500)
   }
   else{
      setmode('light');
      
     document.body.style.backgroundColor='white'
     showAlert("light mode is enabled","success");
     //document.title='TextUtils-LightMode'
     setTimeout( ()=>{
      setalert(null)
     },1500)
   }

 }
  return (
   <>

<Router>
<Navbar title="TextUtilis" mode={mode} tooglemode={tooglemode} aboutText="About" />
<Alert alert={alert}></Alert>
{/* <TextForm heading="Enter the text to analyze"  mode={mode}/> */}
<div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About  mode={mode} />}> 
        </Route>
        <Route exact path="/" element={<TextForm heading="Enter the text to analyze"  mode={mode}/>}>
          
          </Route>
          
      </Routes>
      
      </div>
      
     </Router>

   </>
  
  
  );
}
export default App;
