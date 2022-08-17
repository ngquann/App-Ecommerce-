import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import { Home, Products, ProductDetail, Cart, Login, Register, Contact, Checkout} from '../pages'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
  )
}

export default Routers