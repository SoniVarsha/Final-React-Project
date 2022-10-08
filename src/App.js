import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Product from './components/Product/Product'
import Account from './components/Account/Account'
import Home from './components/Home/Home'
import axios from 'axios';
import Navbar from './navbar';
import Footer from './Footer'
import { AddProduct } from './components/Product/addProduct';

function App() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json "
        );
        localStorage.setItem(
          "accountsPage",
          JSON.stringify(response.data.accountsPage)
        );
        localStorage.setItem(
          "dashboardPage",
          JSON.stringify(response.data.dasbhoardPage)
        );
        localStorage.setItem(
          "productsPage",
          JSON.stringify(response.data.productsPage)
        );
        localStorage.setItem(
          "setLogin", "false"
        );
        localStorage.setItem(
          "data",
          JSON.stringify((response))
        );
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);


  return (<>
    <BrowserRouter>
      <Navbar />
  
      <Routes>
   
<Route exact path="/Dashboard"  element={<Dashboard/>}/>

<Route exact path="/Product" element={<Product/>}/>
<Route exact path="/Account" element={<Account/>}/>
<Route exact path='/addproduct' element={<AddProduct/>}/>
<Route exact path="*" element={<Home/>}/>
</Routes>




    </BrowserRouter>
    <Footer />


  </>
  )
}
export default App;