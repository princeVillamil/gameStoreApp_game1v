import React from 'react'
import whiteCartImg from '../Assets/img/whiteCart.png'


export default function GameCards({leage, platforms}) {
  return (
    <li className='gameCard card'>
      <div className="image">
        <img src={leage['background_image']}/>
      </div>
      <div className="gameCardInfo">
        <div className="gameCardInfoPlatnScore">
          <ul>
            {leage['parent_platforms'].map((x,i)=>{
              return <li key={i+0} className='platformIcon'><img src={`${platforms[`${x['platform']['slug']}`]}`} alt="" /></li>
            })}
          </ul>
          <span style={{borderColor: `${leage['metacritic']>=80 ? 'rgba(109,200,73,.4)': leage['metacritic']>=65 ? 'rgba(253,202,82,.4)': 'border-color: rgba(252,75,55,.4)'}`,
              color: `${leage['metacritic']>=80 ? '#6dc849': leage['metacritic']>=65 ? '#fdca52': 'border-color: #fc4b37'}`}}>{leage['metacritic']}</span>
        </div>
        <h3><a href={`/game/${leage.slug}`}>{leage['name']}</a></h3>
        <div className="gameCardActions">
          <span>500 tokens</span>
          <button className="gameCardActionsCartButton">
            <img src={whiteCartImg} alt="black shoping cart" />
          </button>
        </div>
      </div>
    </li>
  )
}
