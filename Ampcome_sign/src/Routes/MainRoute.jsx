import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from '../Component/Login'
import DashBoard from '../Component/DashBoard'
import Appoint from '../Component/Appoint'
const MainRoute = () => {
  return (    
    <>
    <Routes>
        <Route path='/' element={<Login/> }/>
        <Route path='/dash' element={<DashBoard/> } />
        <Route path='/app' element={<Appoint/> } />
    </Routes>
    </>
  )
}


export default MainRoute;
