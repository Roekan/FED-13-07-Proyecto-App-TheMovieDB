import React from 'react'
import { Routes,Route, Navigate } from 'react-router-dom'
import { Home } from '../../pages/home/Home'
import { Series } from '../../pages/series/Series'
import { Top20 } from '../../pages/top20/Top20'
import { Detail } from '../../pages/detail/Detail'
import { Favorites } from '../../pages/favorites/Favorites'

export const Body = () => {
  return (
    <>
    <Routes>
      {/* <Route path="*" element={<Navigate to ="/" />}/> */}
      <Route path="/" element={<Home />}/>
      <Route path="/series/" element={<Series />}/>
      <Route path="/top20/" element={<Top20 />}/>
      <Route path="/:type/:id" element={<Detail />}/>
      <Route path="/favorites/" element={<Favorites />}/>
    </Routes>
    </>
    
  )
}
