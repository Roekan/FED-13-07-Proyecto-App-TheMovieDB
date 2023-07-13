import { useState } from 'react'
import './App.css'
import { Header }  from './common/header/Header'
import { Body } from './common/body/Body'
import { Footer } from './common/footer/Footer'

function App() {

  return (
    <>
      <Header/>
        <Body/>
      <Footer/>
    </>
  )
}

export default App
