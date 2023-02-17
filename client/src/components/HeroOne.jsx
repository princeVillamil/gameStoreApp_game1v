import React from 'react'

export default function HeroOne() {
  return (
    <div className="mainStoreHeroContainer"> {/*container*/}
      <div className="mainStoreHeroInfo"> {/*info*/}
        <h1>{leage['name']}</h1>
        <p style={{color: 'rgb(201, 201, 201)'}}>{leage['description_raw'].split(' ').length <= 50? leage['description_raw']:leage['description_raw'].split(' ').slice(0, 40).join(' ') + ' ...'}</p>
        <div className="mainStoreHeroBot">
          <div className="mainStoreHeroAction">
            <a href='#'>Buy</a>
            <span>{leage['metacritic']}</span>
          </div>
          <ul className='mainStoreHeroIcon'>
            {leage['parent_platforms'].map((x,i)=>{
              return <li key={i+0} className='platformIcon'><img src={`${platforms[`${x['platform']['slug']}`]}`} alt="" /></li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
