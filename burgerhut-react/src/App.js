import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar';
import ListOrder from './components/Orders/ListOrder';
function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Namaste World!</h1>
      <ListOrder />
    </div>
  );
}

export default App;
