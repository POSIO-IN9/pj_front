import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import Nav from './component/Nav';
import Profile1 from './component/Profile1';
import Join from './component/Join';
import Gallery from './component/Gallery';
import Main from './component/Main';
import Information from './component/Information';
import { RecoilRoot } from 'recoil';


function App() {
 
  return (
    <BrowserRouter>
      <RecoilRoot>
        <div>
        <Nav />
        </div>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/main' element={<Main/>}/>
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile1 />} />
          <Route path='/join' element={<Join/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/info' element={<Information/>}/>
        </Routes>
        
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
