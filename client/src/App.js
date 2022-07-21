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
      <Route path='/fotos/umbrella' element={<Editor url={"https://images.unsplash.com/photo-1658275876886-374d94cd4563?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"}/>}/>
      <Route path='/fotos/forestroad' element={<Editor url={"https://images.unsplash.com/photo-1658260068158-5d328a6e8feb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"}/>}/>
      <Route path='/fotos/nebula' element={<Editor url={"https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1959&q=80"}/>}/>
      <Route path='/fotos/beach' element={<Editor url={"https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1889&q=80"}/>}/>
      <Route path='/fotos/lake' element={<Editor url={"https://images.unsplash.com/photo-1500259783852-0ca9ce8a64dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"}/>}/>
      <Route path='/fotos/abstract' element={<Editor url={"https://images.unsplash.com/photo-1541356665065-22676f35dd40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1941&q=80"}/>}/>
      <Route path='/fotos/river' element={<Editor url={"https://images.unsplash.com/photo-1562796374-8bd211f81cbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"}/>}/>
      <Route path='/fotos/fireworks' element={<Editor url={"https://images.unsplash.com/photo-1536940385103-c729049165e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"}/>}/>
      <Route path='/fotos/pineapple' element={<Editor url={"https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"}/>}/>
      <Route path='/fotos/custom' element={<Editor url={imgUrl}/>}/>
    </Routes>
  
  );
}

export default App;
