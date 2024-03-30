import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from './components/Navbar/NavbarPage';
import Home from './components/Home/HomePage';
import ListOrder from './components/Orders/ListOrder';
import AddOrder from './components/Orders/AddOrder';


function App() {
  return (
    <div className="App">
    <Router>
        
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/AddOrder" element={<AddOrder/>} />
                <Route exact path="/ListOrder" element={<ListOrder/>} />
            </Routes>
    </Router>
    </div>


  );
}

export default App;
