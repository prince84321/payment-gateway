import "./verify.scss";
import { Email } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

function Verify() {
  return (
    <div className='verify' id='verify'>
     
     <div className="wrapper">
            <div className="paymentLogo">
              <h1>Lets Pe</h1>
            </div>
            <div className="main-container">
                <div className="main-container-text">
                <span>Paying To</span>
                
                <h2>TEST</h2>
                <p >Name</p>
                <p className="number" >Test</p>
                <p >E mail</p>
                <p className="number">Test@gmail.com</p>
                <p >Contact Number</p>
                <p className="number">58767554345</p>
                <p >Purpose of payment</p>
                <p  className="number">Test</p>

                </div>
                <div className="second-container">

                    <div className="second-form-container">
                        <h3>UPI</h3>
                        <hr className="hr-heading" />
                        <p>Total Payable Amount : ₹ 10.00</p>
                        <div className="form-container">
                        <div className="verifyInput">

                          <input type="text" placeholder="Enter UPI ID" className="input" required/>

                        <div className="form-check">
                         <input className="form-check-input form custom-check" type="checkbox" value="" id="defaultCheck1" />
                         <label className="form-check-label custom-label" htmlFor="defaultCheck1">
                         Secure for faster Checkouts.
                        </label>
                         </div>

                        </div>
                        <NavLink to="/finalpay">
                        <button type="button" class="btn btn-primary custom-btn">verify & Pay</button>
                        </NavLink>
                          </div>
                        </div>
                      
                    

                    </div>

                </div>
            </div>
            <div className="email">
                <Email className="icon" />
                <span>support@letspe.com</span>
            </div>
        </div>

  )
}

export default Verify;