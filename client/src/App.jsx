import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import { StoreProvider } from './context/Store'
import { Toaster } from 'sonner'
import NotFound from './views/NotFound'
import Register from './views/Register'
import Login from './views/Login'
import NavBar from './components/NavBar'
import Dashboard from './views/Dashboard'
import ViewRoadMap from './views/ViewRoadMap'

const App = () => {
  return (

    <BrowserRouter>
      <StoreProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="view/:id" element ={<ViewRoadMap/>}/>
 
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </StoreProvider>
      <Toaster theme='dark'/>
    </BrowserRouter>
  )
}

export default App