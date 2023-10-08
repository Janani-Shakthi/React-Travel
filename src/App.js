import { Route, Routes } from 'react-router-dom';
import './Styles.css';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Service from './routes/Service';
import About from './routes/About';
import Sign from './routes/Sign';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/service' element={<Service />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/sign' element={<Sign />}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
