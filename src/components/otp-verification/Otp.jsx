  import { NavLink } from "react-router-dom";
import "./otp.scss";

function Otp() {
  return (
    <div className="otp" >
      <div className="wrapper-2">

      <div className="topbar-3">
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
                <h3>OTP Verification</h3>
                <span>OTP shared on your registered number</span>
                <div className="form-container2">
                <div className="form-item">
                
                <input type="text" placeholder="+91-XXXX-XX-XXXX" className="item-1" />
                </div>
                <div className="form-item">
                  <span className="enter-otp">Enter OTP</span>
                </div>
                <div className="otp-text">
                   <input placeholder="*" type="password" className="item" />
                   <input placeholder="*" type="password" className="item" />
                   <input placeholder="*" type="password" className="item" />
                   <input placeholder="*" type="password" className="item" />
                </div>
                <div className="anchor">
                <NavLink to ="/payment-link" className="prevPage">Previous page</NavLink>
                <a href="#sign_-Up" className="resendOtp">Resend OTP in: 00:30</a>
                </div>
                <NavLink to="/generate-invoice" >
                   <button className="btn">Verify</button>
                  </NavLink> 
                
                </div>
                
              </div>
            </div>
            </div>          
        </div>
        </div>
        
  
  )
}

export default Otp;