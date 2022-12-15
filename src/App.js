// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home';
import ErrorPage from './components/Pages/Error';
import Welcome from './components/Pages/Welcome/Welcome';
import About from './components/Pages/About/about';


function App () {
  return (
    <div className="App">
      <div>
        <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        {/* <Route path="/Service" element={<Service/>} /> */}
          <Route path="*" element={<ErrorPage />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;