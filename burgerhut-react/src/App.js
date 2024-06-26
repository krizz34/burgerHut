import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

// import Navbar from './components/Navbar/NavbarPage';
import Home from './components/Home/HomePage';
import ListOrder from './components/Orders/ListOrder';
import AddOrder from './components/Orders/AddOrder';
import UpdateOrder from './components/Orders/UpdateOrder';
import ViewOrder from './components/Orders/ViewOrder';
import OrderState from './components/Orders/OrderState';



function App() {
  return (
    <div className="App">
    <Router>
        
            {/* <Navbar /> */}
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/addOrder" element={<AddOrder/>} />
                <Route exact path="/listOrder" element={<ListOrder/>} />
                <Route exact path="/updateOrder/:orderId" element={<UpdateOrder/>} />
                <Route exact path="/viewOrder/:orderId" element={<ViewOrder/>} />
                <Route exact path="/orderStatus" element={<OrderState/>} />
            </Routes>
    </Router>
    </div>


  );
}

export default App;
