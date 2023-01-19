import "./signup.scss";
import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <div className="signup" >
      <div className="wrapper">
      <div className="topbar-1">
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
                <h3>Build your LetsPe Account</h3>
                <span>Have an account already?
                  <NavLink to="/log-in">
                  Sign-In.
                 </NavLink> </span>
                <div className="form-container2">
                <div className="form-item">
                  <span>Email:</span>
                <input type="email" placeholder="Type something..." className="item" />
                </div>
                <div className="form-item">
                  <span>Create Password:</span>
                <input placeholder="Type something..." type="password" className="item" />
                </div>
                <div className="form-item">
                  <span>Mobile:</span>
                <input placeholder="Type something..." type="number" className="item" />
                </div>
                <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
             <label className="form-check-label" htmlFor="defaultCheck1">
                 Mobile Notifications
             </label>
                </div>
                </div>
                <NavLink className="createAccount" to="/log-in">
                   <button className="btn">
                    
                      Create Account
                     
                    </button>
                    </NavLink>
              </div>
            </div>
            </div>   

      </div>
             
        </div>
  
  )
}

export default Signup;