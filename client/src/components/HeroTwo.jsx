import React from 'react'

export default function HeroTwo({leage, platforms}) {
  return (
    <div className='mainStoreHeroContent'>
      <h2>Featured & Recommended</h2>
      <div className="mainStoreHeroSlider">
        <div className="mainStoreHeroFeatured">
          <img src={`${leage['background_image']}`} alt="" />
          <div className="mSHFeaturedInfo">
            <div className="mSHFeaturedInfoDisc">
              <h3>{leage['name']}</h3>
              <p>{leage['description_raw'].split(' ').length <= 35? leage['description_raw']:leage['description_raw'].split(' ').slice(0, 30).join(' ') + ' ...'}</p>
              <h4>Available</h4>
              <ul className="mSHFeaturedInfoPlatforms">
                {leage['parent_platforms'].map((x,i)=>{
                  return <li key={i+0} className='platformIcon'><img src={`${platforms[`${x['platform']['slug']}`]}`} alt="" /></li>
                })}
              </ul>
            </div>
            <div className="mSHFeaturedInfoMore">
              <a href="#">Cart</a>
              {/* #6dc849, #fdca52, #fc4b37 */}
              <span style={{borderColor: `${leage['metacritic']>=80 ? 'rgba(109,200,73,.4)': leage['metacritic']>=65 ? 'rgba(253,202,82,.4)': 'border-color: rgba(252,75,55,.4)'}`,
              color: `${leage['metacritic']>=80 ? '#6dc849': leage['metacritic']>=65 ? '#fdca52': 'border-color: #fc4b37'}`}}>{leage['metacritic']}</span>
            </div>
          </div>
        </div>
        <div className="mainStoreHeroFeatured">
          <img src={`${leage['background_image']}`} alt="" />
          <div className="mSHFeaturedInfo">
            <div className="mSHFeaturedInfoDisc">
              <h3>{leage['name']}</h3>
              <p>{leage['description_raw'].split(' ').length <= 35? leage['description_raw']:leage['description_raw'].split(' ').slice(0, 30).join(' ') + ' ...'}</p>
              <h4>Available</h4>
              <ul className="mSHFeaturedInfoPlatforms">
                {leage['parent_platforms'].map((x,i)=>{
                  return <li key={i+0} className='platformIcon'><img src={`${platforms[`${x['platform']['slug']}`]}`} alt="" /></li>
                })}
              </ul>
            </div>
            <div className="mSHFeaturedInfoMore">
              <a href="#">Cart</a>
              {/* #6dc849, #fdca52, #fc4b37 */}
              <span style={{borderColor: `${leage['metacritic']>=80 ? 'rgba(109,200,73,.4)': leage['metacritic']>=65 ? 'rgba(253,202,82,.4)': 'border-color: rgba(252,75,55,.4)'}`,
              color: `${leage['metacritic']>=80 ? '#6dc849': leage['metacritic']>=65 ? '#fdca52': 'border-color: #fc4b37'}`}}>{leage['metacritic']}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mainStoreHeroSliderButtons">
        <button className="mainStoreHeroSliderButton heroActive"></button>
        <button className="mainStoreHeroSliderButton"></button>
        <button className="mainStoreHeroSliderButton"></button>
        <button className="mainStoreHeroSliderButton"></button>
        <button className="mainStoreHeroSliderButton"></button>
        <button className="mainStoreHeroSliderButton"></button>
        <button className="mainStoreHeroSliderButton"></button>
        <button className="mainStoreHeroSliderButton"></button>
        <button className="mainStoreHeroSliderButton"></button>
        <button className="mainStoreHeroSliderButton"></button>
      </div>

    </div>
  )
}
