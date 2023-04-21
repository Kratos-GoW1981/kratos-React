// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Form from './component/Form';
import About from './component/About';
import Navbar from './component/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='grey';
      document.title = "Word Counter- DarkMode";
      setInterval (() => {
        document.title = " Install Word Counter";
      },2000)
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      document.title = "Word Counter- LightMode";


    }
  }
  return (
    <>
    <Router>
      <Navbar title="Word Counter" mode={mode} toggleMode={toggleMode}></Navbar>
      <div className="container">
      <Routes>
          <Route exact path='/About'>
            <About/>
          </Route>
          <Route exact path='/Form' element={<Form/>}>
          <Form heading = "Enter some text below" mode={mode}/>
          </Route>
       </Routes>
      </div>
      </Router>
      </>
    
    
  );
}


export default App;
