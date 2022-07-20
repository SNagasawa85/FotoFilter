import './App.css';
import { useState, useEffect } from 'react';
import ToolBarItem from './components/ToolBarItem';
import Slider from './components/Slider';
import ImageCont from './components/ImageCont';
import Landing from './views/Landing';
import { Routes, Route} from 'react-router-dom'
import Editor from './components/Editor';

function App() {
  const [imgUrl, setImgUrl] = useState('');

  const userImage = (newURL) => {
    setImgUrl(newURL);
    console.log(imgUrl);
    console.log(newURL);
  }

  return (
    <Routes>
    
      <Route path='/' element={<Landing onNewUrl={ userImage }/>}/>
      <Route path='/fotos/tree' element={<Editor url={'tree image url here'}/>}/>
      <Route path='/fotos/custom' element={<Editor url={imgUrl}/>}/>
    </Routes>
  
  );
}

export default App;
