import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './views/Home';
import OneProduct from './components/OneProduct'
import EditProduct from './components/EditProduct';



function App() {


  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/product/:id' element={<OneProduct/>} />
          <Route path='/:id/edit' element={<EditProduct/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
