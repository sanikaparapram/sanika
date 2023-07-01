import React from 'react'
import { Link } from 'react-router-dom'
import foto from '../assets/musical-note.png'
import "./Home.css"

export const Home = () => {
  return (
    <>
    <div className="nav">
        <img src={foto}/>
        <div className="text">Spotify</div>
        <div className="text1">Premium</div>
        <div className="text2">Help</div>
        <div className="text3">Download</div>
        <Link to={'/registration'}>
           <div className="text4">Sign up</div>
        </Link>
        <Link to={'/login'}>
           <div className="text5">Log In</div>
        </Link>
    </div>
    <div className="container">
        <div className="t">Music for everyone.</div>
        <div className="t1">Millions of songs. No credit card needed</div>
    </div>
    <div className="button">
      <button>Get spotify free</button>
    </div>
    
    </>
  )
}
