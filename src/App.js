import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Card from './Pages/Card';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/ >} />
          <Route path='/About' element={<About/ >} />
          <Route path="/Card/:id" element={<Card/>} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

