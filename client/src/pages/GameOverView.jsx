import React from 'react'
import { useEffect } from 'react'
import '../Assets/gameOverView.css'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import whiteCartImg from '../Assets/img/whiteCart.png'
import {getOne, getScreenShot} from '../services/RAWGapi'
import { useState } from 'react'

export default function GameOverView() {
	let slug = window.location.pathname.replace('/game/', '')
	let [game,setGame] = useState({})
	let [gameScreenShot, setGameScreenShot] = useState([])
	// setGame(game => game = getOne(slug))
	useEffect(()=>{
		getOne(slug).then((x)=>{
      setGame(game = x.data)
    })
		getScreenShot(slug).then((x)=>{
			setGameScreenShot(gameScreenShot = x.data.results)
		})
	},[])
	useEffect(()=>{
		console.log(game)
		if(Object.keys(game).length === 0) return
	},[game])
  const months = {
    '01': 'January',
    '02': 'February',
    '03': 'March',
    '04': 'April',
    '05': 'May',
    '06': 'June',
    '07': 'July',
    '08': 'August',
    '09': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December'
  }
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
	let rating = ['skip', 'meh', 'recommended', "Exceptional"]
  useEffect(()=>{
    document.body.style.background = '#151515'
  },[])

  // 18, 2015
  return (
    <div className='gOverviewContainer'>
      <SideBar/>
      <Navbar/>
			{Object.keys(game).length === 0 ? '' : (      <div className="gOverview">
        <div className="gOverviewLeft">
          <div className="gOTop">
            <span>{`${months[`${game['released'].split('-')[1]}`]} ${game['released'].split('-')[2]}, ${game['released'].split('-')[0]}`}</span>
            <ul>
              {game['parent_platforms'].map((x,i)=>{
                return <li key={i+0} className='gOTopLi'><img src={`${platforms[`${x['platform']['slug']}`]}`} alt="" /></li>
                // return <li key={i+1} className='gOTopLi'><img src={`${platforms[`${x}`]}`} alt="" /></li>
              })}
            </ul>
            <p>Average Playtime: {game['playtime']} hours</p>
          </div>
          <h1>{game['name']}</h1>
          {/* <p>{game['description_raw'].split(' ').length <= 50? game['description_raw']:game['description_raw'].split(' ').slice(0, 50).join(' ') + ' ...'}</p> */}
          <div className="gOverviewLeftActions">
            <button className='gOverviewLeftBtns'>
              <span>Add to</span>
              <span>Library</span>
            </button>
            <button className='gOverviewLeftBtns'>
              <span>Add to</span>
              <span>Wishlist</span>
            </button>
            <button className='gOverviewLeftBtns'>
              <span>Add to</span>
              <span>Cart <img src={whiteCartImg} alt="" /></span>
            </button>
          </div>
          <div className="gOverviewLeftRating">
            <div className="gOverviewLeftInnerRating">
              <span>{rating[game['rating_top']-2]}</span>
              <span>{game['ratings_count']} RATINGS</span>
            </div>
            <div className="gOverviewLeftInnerRating">
              <span>{game['metacritic']}</span>
              <span>Metascore</span>
            </div>
            <div className="gOverviewLeftInnerRating">
              <span>{game['developers'][0].name}</span>
              <span>Developers</span>
            </div>
          </div>
					<div className="about">
						<h2>About</h2>
						{game['description_raw'].split('\n').map((x,i)=>{
							if(x.length===0) return
							return <p key={`desc${i}`} className='desc'>{x}</p>
						})}
						{/* {console.log(game['description_raw'].split('\n'))} */}
						{/* <p className='desc'>{game['description_raw']}</p> */}
					</div>
        </div>
        <div className="gOverviewRight">
          <div className="gOverviewRightImg">
            {
              gameScreenShot.map((x,i)=>{
                if(i>4) return
                return <div key={i+10} className='img'>
                  <img src={`${x['image']}`} alt="img of game" />
                </div>
              })
            }
          </div>
        </div>
      </div>)}
    </div>
  )
}
