import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Cards from './Components/Cards';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/ >} />
          <Route path='/About' element={<About/ >} />
          <Route path="/Logement/:id" component={Cards} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

