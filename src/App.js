import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Start from './components/Start.js';
import Entry from './components/Entry.js';
import Notfound from './components/Notfound.js';
import Home from   './components/Home.js'
import Orders from './components/Orders.js';
import Stock from './components/Stock.js';
import Payments from './components/Payments.js';
import Purchases from './components/Purchases.js';
import CustomerList from './components/Customerlist.js';
import Pendingpayment from './components/Pendingpayment.js';
import StockAlert from './components/StockAlert.js';
import Cashcounter from './components/Cashcounter.js';
import Salesreport from './components/Salesreport.js';
import Profile from "./components/Profile.js"

function App() {
  return (
    <>
    <Routes>
<Route path="/" element={<Start/>}/>
  <Route path="/entry" element={<Entry/>}/>
  <Route path="/home" element={<Home/>}/>
  <Route path="/Orders" element={<Orders/>}/>
  <Route path="/Stock" element={<Stock/>}/>
  <Route path="/Payments" element={<Payments/>}/>
  <Route path="/Purchases" element={<Purchases/>}/>
  <Route path="/Customerlist" element={<CustomerList/>}/>
  <Route path="/Pendingpayment" element={<Pendingpayment/>}/>
  <Route path="/StockAlert" element={<StockAlert/>}/>
  <Route path="/Salesreport" element={<Salesreport/>}/>
  <Route path="/Cashcounter" element={<Cashcounter/>}/>
  <Route path="/profile" element={<Profile/>}/>
  <Route path="*" element={<Notfound/>}></Route>

    </Routes>
   </>
  );
}

export default App;
