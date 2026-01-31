import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'

import Footer from './component/Footer'
import DetailPage from './pages/DetailPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddCartPage from './pages/AddCartPage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
    <Navbar/>


<Routes>
  <Route path='/' element={<Home/>}/>

  <Route path="/detail/:id" element={<DetailPage/>}/>
  <Route path="/cart" element={<AddCartPage/>}/>

</Routes>

<Footer/>

      </BrowserRouter>

     
    </div>
  )
}

export default App