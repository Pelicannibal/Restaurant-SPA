import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import './App.css'

import Navbar from './components/Navbar'

import Home from "./tabs/Home";
import Menu from './tabs/Menu';
import OrderNow from "./tabs/OrderNow";
import CurrentOrders from "./tabs/CurrentOrders";
import { AdminForm } from "./tabs/AdminForm";

function App(){
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/order' element={<OrderNow />}/>
          <Route path='/current_orders' element={<CurrentOrders />}/>
          <Route path='/admin' element={<AdminForm/>}/>
        </Routes>
      </Router>
      <footer id='contact'>
        <h3>Contact</h3>
        <p>Phone: +1 800 eat-now</p>
        <p>Email: food@restaurant.com</p>
        <p>Address: 7 Culinary st., WA, 77-7777</p>
      </footer>
    </>
  )
}

export default App
