import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css'

import Navbar from './components/Navbar'

import Home from "./Home";
import Menu from './Menu';

function App(){
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
        </Routes>
      </Router>
      <footer id='contact'>
        <p>Phone: +1 800 eat-now</p>
        <p>Email: food@restaurant.com</p>
        <p>Address: 7 Culinary st., WA, 77-7777</p>
      </footer>
    </>
  )
}

export default App
