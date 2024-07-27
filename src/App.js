
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Loginsignup from './Pages/Loginsignup';
import Shop from '../src/Pages/Shop';
import Shopcatogory from '../src/Pages/Shopcatogory';
import Product from '../src/Pages/Product';
import Cart from '../src/Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/Frontend_Assets/banner_mens.png';
import woman_banner from "./Components/Assets/Frontend_Assets/banner_women.png";
import kid_banner from "./Components/Assets/Frontend_Assets/banner_kids.png";

function App() {
  return (
    <div className='container'>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}></Route>
      <Route path='/mens' element={<Shopcatogory banner={men_banner} category='men' />}></Route>
      <Route path='/women' element={<Shopcatogory banner={woman_banner} category='women'/>}></Route>
     <Route path='/kids' element={<Shopcatogory banner={kid_banner} category='kid'/>}></Route>
     <Route path='/product' element={<Product />}></Route>
     <Route path='/:productId' element={<Product />}></Route>
     <Route path='/cart' element={<Cart/>}></Route>
     <Route path='/login' element={<Loginsignup/>}></Route>

    </Routes>
    <Footer/>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
