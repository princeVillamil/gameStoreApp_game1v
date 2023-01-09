// const {REACT_APP_SPACE_ID} = process.env
// console.log(process.env.REACT_APP_RAWG_API)
// Get first ten for featured
import React from 'react'
import axios from "axios"
const RAWG_GAME_API = 'https://api.rawg.io/api/games'

export const getFirstTen = async ()=>{
  try{
    // console.log('working', process.env.REACT_APP_RAWG_API)
    const URI = RAWG_GAME_API + '?key=' + process.env.REACT_APP_RAWG_API + '&page=1&page_size=10';
    const req = await axios.request({
			method: "GET",
			url: URI,
		})
    // console.log(req.data.results)
    req.data.results.forEach(x=>{
      console.log(x.name)
    })
    console.log('--------')
  }catch(err){
    console.log(err.response)
  }
}
export const getTopPicks = async ()=>{
  try{
    const URI = RAWG_GAME_API + '?key=' + process.env.REACT_APP_RAWG_API + '&page=1&page_size=24';
    const req = await axios.request({
			method: "GET",
			url: URI,
		})
    // console.log(req.data.results)
    // console.log(req.data.results)
    return await req
    // req.data.results.forEach((x,i)=>{
    //   if(i<10) return
    //   // console.log(x.name)
    // })
    console.log('--------')
  }catch(err){
    console.log(err.response)
  }
}
export const getOne = async (slug)=>{
  try {
    const URI = RAWG_GAME_API + '/' +slug + '?key=' + process.env.REACT_APP_RAWG_API;
    const req = await axios.request({
			method: "GET",
			url: URI,
		})
    return await req
  } catch (err) {
    console.log(err.response)
  }
}
export const getScreenShot = async (slug)=>{
  try {
    const screenShotURI = RAWG_GAME_API + '/' +slug + '/screenshots' + '?key=' + process.env.REACT_APP_RAWG_API;
    console.log(screenShotURI)
    const req = await axios.request({
			method: "GET",
			url: screenShotURI,
		})
    return await req
  } catch (err) {
    console.log(err.response)
  }
}

// export default getTopPicks