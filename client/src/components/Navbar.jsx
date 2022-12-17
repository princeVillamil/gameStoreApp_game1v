import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import '../Assets/navBar.css'

export default function Navbar() {
  let [isSearching, setIsSearching] = useState(false);
  useEffect(()=>{
    console.log('click')
  }, [isSearching])

  return (
    <nav className='navbar'>
      <h2>Game1V</h2>
      <div className="navbarSearchInput">
        <svg className="sc-hMFtBS search-icon ibpoCO" version="1.1" viewBox="0 0 1000 1000" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px"><path d="M968.2,849.4L667.3,549c83.9-136.5,66.7-317.4-51.7-435.6C477.1-25,252.5-25,113.9,113.4c-138.5,138.3-138.5,362.6,0,501C219.2,730.1,413.2,743,547.6,666.5l301.9,301.4c43.6,43.6,76.9,14.9,104.2-12.4C981,928.3,1011.8,893,968.2,849.4z M524.5,522c-88.9,88.7-233,88.7-321.8,0c-88.9-88.7-88.9-232.6,0-321.3c88.9-88.7,233-88.7,321.8,0C613.4,289.4,613.4,433.3,524.5,522z"></path></svg>
        <input type="text" placeholder='Search' />
        <div className="navbarSearchCtrl">
          <span>alt</span>
          <p>+</p>
          <span>enter</span>
        </div>
      </div>
      <div className="navbarSearchNavs">
        <ul>
          <li><a href="#">Tokens</a></li>
          <li><a href="#">Favourites</a></li>
          <li><a href="#">Cart</a></li>
        </ul>
        <div className="navbarpfp">
          <a href="#">
            PV
          </a>
        </div>
      </div>
    </nav>
  )
}
