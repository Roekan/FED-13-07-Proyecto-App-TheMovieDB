import React, { useEffect } from 'react'
import './Home.css'
import { bringCharacters } from '../../services/apiCalls'

export const Home = () => {


  useEffect(()=>{

    bringCharacters();


  },[])






  return (

    <div>Home</div>

  )
}
