import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home';
import Menu from '../pages/Menu/Menu';
import AboutUs from '../pages/AboutUs/AboutUs';
import SignIn from '../pages/SignIn/SignIn';
import NotFound from '../pages/NotFound/NotFound';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import Comments from '../pages/Comments/Comments';
import Cart from '../pages/Cart/Cart';
import Favourites from '../pages/Favourites/Favourites';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/menu' element={<Menu></Menu>}></Route>
      <Route path="/menu/:id" element={<ProductDetails></ProductDetails>}>
        <Route path="comments" element={<Comments></Comments>}></Route>
      </Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/favourites' element={<Favourites></Favourites>}></Route>
      <Route path='/about' element={<AboutUs></AboutUs>}></Route>
      <Route path='/sign' element={<SignIn></SignIn>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
  )
}

export default AppRoutes