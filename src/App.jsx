import './assets/global.css';
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Leadership from './pages/Leadership/Leadership';
import Tracks from './pages/Tracks/Tracks';
import Event from './pages/Event/Event';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  

  return (
    <>
    
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/leadership' element={<Leadership />} />
      <Route path='/tracks' element={<Tracks />}/>
      <Route path='/event' element={<Event />}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
