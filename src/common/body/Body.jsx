import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import { Home } from '../../pages/home/Home'

export const Body = () => {
  return (
    <>
    <Routes>
      <Route path="*" element={<Navigate to ="/FED-13-07-Proyecto-App-TheMovieDB/" />}/>
      <Route path="/FED-13-07-Proyecto-App-TheMovieDB/" element={<Home />}/>
    </Routes>
    </>
    
  )
}
