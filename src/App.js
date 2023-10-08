import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './Styles.css';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Service from './routes/Service';
import About from './routes/About';
import Sign from './routes/Sign';
function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/React-Travel'>
          <Routes>
            <Route exact path='/React-Travel' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/service' element={<Service />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/sign' element={<Sign />}/>
          </Routes>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
