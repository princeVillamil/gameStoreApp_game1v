import React from 'react'
import '../Assets/signupandlogin.css'

export default function Signup() {
  return (
    <div className='signupContainer'>
    <nav className='navbar'>
      <h2>Game1V</h2>
      <div className="navbarSearchNavs">
        <ul>
          <li><a href="#">Login</a></li>
          <li><a href="#">Signup</a></li>
          <li><a href="#">API</a></li>
        </ul>
      </div>
    </nav>
    {/* https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg */}
    <div className="signupBody">
      <div className="signupBodyContainer">
        <div className="suLeft">
          <h3>Sign up</h3>
          <form action="#">
            <input type="email" placeholder='Email' required/>
            <input type="text" placeholder='Username' required/>
            <input type="password" placeholder='Create a password' required/>
            <input type="submit"/>
          </form>
          <a href="/login">Already have an account? Log in.</a>
        </div>
        <div className="suRight">
          <h3>You can use social accounts to sign up</h3>
          <a href="#" class="social-button" id="facebook-connect"> <span>Connect with Facebook</span></a>
          <a href="#" class="social-button" id="google-connect"> <span>Connect with Google</span></a>
          <a href="#" class="social-button" id="twitter-connect"> <span>Connect with Twitter</span></a>
        </div>
      </div>
    </div>
    </div>
  )
}
