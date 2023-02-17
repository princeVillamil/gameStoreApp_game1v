import React from 'react'
import '../Assets/signupandlogin.css'

export default function Login() {
  return (
    <div className='signupContainer'>
    <nav className='navbar'>
      <h2>Game1V</h2>
      <div className="navbarSearchNavs">
        <ul>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">Signup</a></li>
          <li><a href="https://api.rawg.io/docs/" target='_blank'>API</a></li>
        </ul>
      </div>
    </nav>
    {/* https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg */}
    <div className="signupBodyTwo">
      <div className="signupBodyContainer">
        <div className="suLeft">
          <h3>Log in</h3>
          <form action="#">
            <input type="email" placeholder='Email' required/>
            <input type="password" placeholder='Create a password' required/>
            <input type="submit"/>
          </form>
          <a href="/signup">Don't have an account? Sign up.</a>
        </div>
        <div className="suRight">
          <h3>You can use social accounts to log in</h3>
          <a href="#" class="social-button" id="facebook-connect"> <span>Connect with Facebook</span></a>
          <a href="#" class="social-button" id="google-connect"> <span>Connect with Google</span></a>
          <a href="#" class="social-button" id="twitter-connect"> <span>Connect with Twitter</span></a>
        </div>
      </div>
    </div>
    </div>
  )
}
