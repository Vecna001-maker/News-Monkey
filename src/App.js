import './App.css';
import React, {useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';


export default function App(props) {

  const apiKey = process.env.REACT_APP_API_KEY;


  const [mode,setmode] = useState('light');
  const [progress,setprogress] = useState('0');


  const toggleMode = () => {
      if(mode === 'dark'){
        setmode('light');
      }
      else{
        setmode('dark');
      }
    
  };

  const setProgress = (progress) => {
      setprogress(progress);
  }

  return (
    <Router>
      <div>
        <LoadingBar
          color='#f11946'
          height='2px'
          progress={progress}
        // onLoaderFinished={() => setProgress(0)}
        />
        <Navbar mode={mode} toggleMode={toggleMode} />
        

        <Routes>
          <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} key={'general'} mode={mode} pageSize={5} category={'general'} />} />
          <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress} key={'business'} mode={mode} pageSize={5} category={'business'} />} />
          <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress} key={'health'} mode={mode} pageSize={5} category={'health'} />} />
          <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} key={'sports'} mode={mode} pageSize={5} category='sports' />} />
        </Routes>
      </div>
    </Router>

  )
}

