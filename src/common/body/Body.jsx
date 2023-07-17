import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import { Home } from '../../pages/home/Home'
import { Series } from '../../pages/series/Series'
import { Top20 } from '../../pages/top20/Top20'

export const Body = () => {
  return (
    <>
    <Routes>
      {/* <Route path="*" element={<Navigate to ="/FED-13-07-Proyecto-App-TheMovieDB/" />}/> */}
      <Route path="/FED-13-07-Proyecto-App-TheMovieDB/" element={<Home />}/>
      <Route path="/FED-13-07-Proyecto-App-TheMovieDB/series/" element={<Series />}/>
      <Route path="/FED-13-07-Proyecto-App-TheMovieDB/top20/" element={<Top20 />}/>
    </Routes>
    </>
    
  )
}
