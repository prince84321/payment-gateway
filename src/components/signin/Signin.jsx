import "./signin.scss";
import { NavLink } from "react-router-dom";

function Signin() {
  return (
    <div className="signIn" >
    <div className="wrapper-1">

    <div className="topbar-2">
    <h1>Lets Pe</h1>
    </div>
          
          <div className="container">
          <div className="left">
            <span> Why choose LetsPe for payments</span>
            <span> Get started with 100% online onboarding </span>
            <span> Get started with 100% online onboarding </span>
            <span> Why choose LetsPe for payments </span>
            <span> Get started with 100% online onboarding </span>
            <span> Why choose LetsPe for payments </span>
          </div>

          
          <div className="right">
            <div className="form-container">
              <h3>Welcome, Merchant!!</h3>
              <span>Don't have an Account?
                <NavLink to="/">
                Sign-Up.
               </NavLink> </span>
              <div className="form-container2">
              <div className="form-item">
                <span>Email:</span>
              <input type="email" placeholder="Type something..." className="item" />
              </div>
              <div className="form-item">
                <span>Password:</span>
              <input placeholder="Type something..." type="password" className="item" />
              </div>
             
              <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
           <label className="form-check-label" htmlFor="defaultCheck1">
               Remember Me.
           </label>
              </div>
              </div>
              <NavLink className="createAccount" to="/dashboard">
                 <button className="btn">
                    Sign In
                  
                  </button>
                  </NavLink>
            </div>
          </div>
          </div>   

    </div>
           
      </div>
  )
}

export default Signin;