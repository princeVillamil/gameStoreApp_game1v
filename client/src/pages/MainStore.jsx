import React from 'react'
import LolImg from '../Assets/LOLmainhomeslide.jpg'
import '../Assets/mainStore.css'
import leage from '../Assets/plaeHolder'
import Navbar from '../components/Navbar'
import HeroTwo from '../components/HeroTwo'
import GameCards from '../components/GameCards'
import SideBar from '../components/SideBar'
import GameOverview from '../components/GameOverview'
import { useState } from 'react'
import { useEffect } from 'react'
import getTopPicks from '../services/RAWGapi.js'

export default function MainStore() {
  let platforms = {
    linux: 'https://rawg.io/assets/ea10db63cd5cf752e220d2726db4f934.svg',
    mac: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNSAxOCc+PHBhdGggZD0nTTEwLjg2OSAwaC4xMjdjLjEwMiAxLjI2LS4zNzkgMi4yMDItLjk2MyAyLjg4NC0uNTc0LjY3Ny0xLjM1OSAxLjMzNC0yLjYyOSAxLjIzNC0uMDg0LTEuMjQyLjM5Ny0yLjExNC45OC0yLjc5NEM4LjkyNy42OSA5LjkxOS4xMjYgMTAuODcgMHptMy43NTYgMTMuMTk2di4wMzZhMTAuNTM0IDEwLjUzNCAwIDAxLTEuNDk0IDIuODk5Yy0uNTcuNzg5LTEuMjY3IDEuODUtMi41MTMgMS44NS0xLjA3NyAwLTEuNzkyLS42OTYtMi44OTYtLjcxNS0xLjE2Ny0uMDItMS44MS41ODMtMi44NzcuNzM0aC0uMzY0Yy0uNzgzLS4xMTQtMS40MTYtLjc0LTEuODc3LTEuMzAyQTExLjQ1MiAxMS40NTIgMCAwMTAgMTAuMTM0di0uODA4Yy4wODMtMS45NjkgMS4wMzMtMy41NyAyLjI5NS00LjM0NS42NjctLjQxMyAxLjU4My0uNzY0IDIuNjAzLS42MDcuNDM3LjA2OC44ODQuMjE5IDEuMjc1LjM2OC4zNzEuMTQ0LjgzNS4zOTggMS4yNzUuMzg1LjI5OC0uMDA5LjU5NC0uMTY1Ljg5NC0uMjc1Ljg4LS4zMiAxLjc0LS42ODcgMi44NzctLjUxNCAxLjM2NS4yMDcgMi4zMzQuODE4IDIuOTMzIDEuNzYtMS4xNTUuNzQtMi4wNjggMS44NTUtMS45MTIgMy43Ni4xMzggMS43MyAxLjEzNyAyLjc0MiAyLjM4NSAzLjMzOHonIGZpbGw9JyNGRkYnLz48L3N2Zz4=',
    android: 'https://rawg.io/assets/f8777fb92ed5b91753dfb9810fad29a1.svg',
    pc: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMTYgMTYnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTAgMTMuNzcybDYuNTQ1LjkwMlY4LjQyNkgwek0wIDcuNjJoNi41NDVWMS4yOTZMMCAyLjE5OHptNy4yNjUgNy4xNWw4LjcwNCAxLjJWOC40MjVINy4yNjV6bTAtMTMuNTd2Ni40Mmg4LjcwNFYweicgZmlsbD0nI0ZGRicvPjwvc3ZnPg==',
    playstation: 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMjEgMTYnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nTTExLjExMiAxNkw4IDE0LjY1NFYwczYuNzY0IDEuMTQ3IDcuNjk1IDMuOTg3Yy45MzEgMi44NDItLjUyIDQuNjgyLTEuMDMgNC43MzYtMS40Mi4xNS0xLjk2LS43NDgtMS45Ni0uNzQ4VjMuMzlsLTEuNTQ0LS42NDhMMTEuMTEyIDE2ek0xMiAxNC4zMlYxNnM3LjY2Ni0yLjMzOCA4Ljc5NC0zLjI0YzEuMTI4LS45LTIuNjQxLTMuMTQyLTQuNjY2LTIuNzA0IDAgMC0yLjE1Mi4wOTktNC4xMDIuOTAxLS4wMTkuMDA4IDAgMS41MSAwIDEuNTFsNC45NDgtMS4wOTUgMS43NDMuNzNMMTIgMTQuMzJ6bS01LjAyNC0uNzczcy0uOTQyLjQ3Ni0zLjA0MS40NTJjLTIuMS0uMDI0LTMuOTU5LS41OTUtMy45MzUtMS44MzNDLjAyNCAxMC45MjggMy40NzYgOS41NzEgNi45NTIgOXYxLjczOGwtMy42OTMuOTUycy0uNjMyLjc4Ni4yMTcuODFBMTEuOTM0IDExLjkzNCAwIDAwNyAxMi4wNDZsLS4wMjQgMS41eicgZmlsbD0nI0ZGRicvPjwvc3ZnPg==',
    xbox: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxNiAxNic+PHBhdGggZmlsbD0nI0ZGRicgZD0nTTMuNTY0IDEuMzU3bC0uMDIyLjAyYy4wNDYtLjA0OC4xMS0uMS4xNTQtLjEyOEM0Ljk0OC40MzUgNi4zOTYgMCA4IDBjMS41MDIgMCAyLjkwOC40MTUgNC4xMSAxLjEzNi4wODYuMDUyLjMyNC4yMTUuNDQ2LjM2M0MxMS40LjIyMiA3Ljk5MyAyLjk2MiA3Ljk5MyAyLjk2MmMtMS4xNzctLjkwOC0yLjI2LTEuNTI2LTMuMDY3LTEuNzQ2LS42NzQtLjE4NS0xLjE0LS4wMy0xLjM2Mi4xNDF6bTEwLjMwNSAxLjIwOGMtLjAzNS0uMDQtLjA3NC0uMDc2LS4xMDktLjExNi0uMjkzLS4zMjItLjY1My0uNC0uOTc4LS4zNzgtLjI5NS4wOTItMS42Ni41ODQtMy4zNDIgMi4xNzIgMCAwIDEuODk0IDEuODQxIDMuMDUzIDMuNzIzIDEuMTU5IDEuODgzIDEuODUyIDMuMzYyIDEuNDI2IDUuNDE1QTcuOTY5IDcuOTY5IDAgMDAxNiA3Ljk5OWE3Ljk2OCA3Ljk2OCAwIDAwLTIuMTMtNS40MzR6TTEwLjk4IDguNzdhNTUuNDE2IDU1LjQxNiAwIDAwLTIuMjg3LTIuNDA1IDUyLjg0IDUyLjg0IDAgMDAtLjctLjY4NmwtLjg0OC44NTRjLS42MTQuNjItMS40MTEgMS40My0xLjg1MyAxLjkwMi0uNzg3Ljg0LTMuMDQzIDMuNDc5LTMuMTcgNC45NTggMCAwLS41MDItMS4xNzQuNi0zLjg4LjcyLTEuNzY5IDIuODkzLTQuNDI1IDMuODAxLTUuMjkgMCAwLS44My0uOTEzLTEuODctMS41NDRsLS4wMDctLjAwMnMtLjAxMS0uMDA5LS4wMy0uMDJjLS41LS4zLTEuMDQ3LS41My0xLjU3My0uNTZhMS4zOTEgMS4zOTEgMCAwMC0uODc4LjQzMUE4IDggMCAwMDEzLjkyIDEzLjM4MWMwLS4wMDItLjE2OS0xLjA1Ni0xLjI0NS0yLjU3LS4yNTMtLjM1NC0xLjE3OC0xLjQ2LTEuNjk2LTIuMDR6Jy8+PC9zdmc+',
    ios: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMSAxOCc+PHBhdGggZmlsbD0nI0ZGRicgZD0nTTkuNTM4IDBIMS42NTFDLjg5NiAwIC4yODcuNTg3LjI4NyAxLjMxdjE1LjM2OGMwIC43MjMuNjEgMS4zMSAxLjM2NCAxLjMxaDcuODg3Yy43NTQgMCAxLjM2NC0uNTg3IDEuMzY0LTEuMzFWMS4zMWMwLS43MjMtLjYxLTEuMzEtMS4zNjQtMS4zMXptLTUuODkuNzk2aDMuODk0Yy4wOTggMCAuMTc4LjE0LjE3OC4zMTUgMCAuMTc0LS4wOC4zMTYtLjE3OC4zMTZIMy42NDhjLS4wOTkgMC0uMTc3LS4xNDItLjE3Ny0uMzE2IDAtLjE3NC4wNzgtLjMxNS4xNzctLjMxNXptMS45NDcgMTUuODk4Yy0uNDggMC0uODctLjM3NS0uODctLjgzNiAwLS40NjIuMzktLjgzNS44Ny0uODM1cy44Ny4zNzMuODcuODM1YzAgLjQ2MS0uMzkuODM2LS44Ny44MzZ6TTkuODggMTMuODNIMS4zMVYyLjIxaDguNTd2MTEuNjJ6Jy8+PC9zdmc+',
    nintendo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyMSAxNic+PHBhdGggZmlsbD0nI0ZGRicgZmlsbC1ydWxlPSdldmVub2RkJyBkPSdNOCAwaDVhOCA4IDAgMTEwIDE2SDhBOCA4IDAgMTE4IDB6bS0uMTM1IDEuOTM1YTYuMDY1IDYuMDY1IDAgMDAwIDEyLjEzaDUuMTJhNi4wNjUgNi4wNjUgMCAwMDAtMTIuMTNoLTUuMTJ6bS0xLjMzIDIuMzA0aDIuNDAxbDMuMTk5IDUuMTc1VjQuMjRoMi4zNDZ2Ny40OTVIMTIuMThMOC44NjQgNi41Mzd2NS4yMDFINi41M2wuMDA1LTcuNDk5eicvPjwvc3ZnPg==',

  }
  let [gameList, setGameList] = useState([])
  // let [currentOrder, setCurrentOrder] = useState('all')
  let handleCurrentOrder = (e) =>{
    console.log(e.target.nextSibling.textContent.toLowerCase())
  }
  useEffect(()=>{
    document.body.style.background = '#151515'
    getTopPicks().then((x)=>{
      setGameList(gameList = x.data.results)
    })
  },[])

  return (
    <div className='mainStoreContainer'>
      {/* <GameOverview platforms={platforms}/> */}
      <SideBar/>
      <Navbar/>
      <section className='mainStoreHero'> 
        <HeroTwo leage={leage} platforms={platforms}/>
      </section>
      <main className='mainContainer'>
        <div className="mainTopCards">
          <h2>Top picks</h2>
          <div className="mainTopCardsCtrlsWrapper">
            <span>Platfrom: </span>
            <div className="mainTopCardsCtrls select" tabIndex="1">
              <input onChange={(e)=>handleCurrentOrder(e)} className="selectopt" name="test" type="radio" id="opt1" defaultChecked/>
              <label htmlFor="opt1" className="option opt1">ALL</label>
              <input onChange={(e)=>handleCurrentOrder(e)} className="selectopt" name="test" type="radio" id="opt2" defaultChecked/>
              <label htmlFor="opt2" className="option opt1">PC</label>
              <input onChange={(e)=>handleCurrentOrder(e)} className="selectopt" name="test" type="radio" id="opt3" />
              <label htmlFor="opt3" className="option opt2">PlayStation</label>
              <input onChange={(e)=>handleCurrentOrder(e)} className="selectopt" name="test" type="radio" id="opt4" />
              <label htmlFor="opt4" className="option opt3">Xbox</label>
              <input onChange={(e)=>handleCurrentOrder(e)} className="selectopt" name="test" type="radio" id="opt5" />
              <label htmlFor="opt5" className="option">iOS</label>
              <input onChange={(e)=>handleCurrentOrder(e)} className="selectopt" name="test" type="radio" id="opt6" />
              <label htmlFor="opt6" className="option">Andriod</label>
              <input onChange={(e)=>handleCurrentOrder(e)} className="selectopt" name="test" type="radio" id="opt7" />
              <label htmlFor="opt7" className="option">Mac</label>
              <input onChange={(e)=>handleCurrentOrder(e)} className="selectopt" name="test" type="radio" id="opt8" />
              <label htmlFor="opt8" className="option">Linux</label>
              <input onChange={(e)=>handleCurrentOrder(e)} className="selectopt" name="test" type="radio" id="opt9" />
              <label htmlFor="opt9" className="option">Nintendo</label>
              <input onChange={(e)=>handleCurrentOrder(e)} className="selectopt" name="test" type="radio" id="opt10" />
              <label htmlFor="opt10" className="option">Web</label>
            </div>
          </div>
        </div>

        <div className="mainCardsContainer">
          <ul className='cards'>
            {
              gameList.map((x,i)=>{
                // console.log(x.name)
                return <GameCards key={i*10} leage={x} platforms={platforms}/>
              })
            }
            {/* <GameCards leage={leage} platforms={platforms}/>
            <GameCards leage={leage} platforms={platforms}/>
            <GameCards leage={leage} platforms={platforms}/>
            <GameCards leage={leage} platforms={platforms}/> */}
          </ul>
        </div>
      </main>

    </div>
  )
}
