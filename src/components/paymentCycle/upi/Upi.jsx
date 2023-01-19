import "./upi.scss";
import { Email } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
function  Upi() {
  return (
    <div className='upi' id='upi'>
      
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

                          <div className="pay-company">
                           <NavLink to="/verify">
                            <img src="./assets/phonepe.png" alt="" className="pay-logo" />
                            </NavLink>
                           
                          </div>
                          <div className="pay-company">
                          <NavLink to="/verify">
                          <img src="./assets/google-pay.png" alt="" className="pay-logo" />
                          </NavLink>
                          </div>
                          <div className="pay-company">
                          <NavLink to="/verify">
                          <img src="./assets/mobi.png" alt="" className="pay-logo" />
                          </NavLink>
                          </div>
                          <div className="pay-company">
                          <NavLink to="/verify">
                          <img src="./assets/amazon.png" alt="" className="pay-logo" />
                          </NavLink>
                          </div>
                          <div className="pay-company">
                          <NavLink to="/verify">
                          <img src="./assets/bhim.png" alt="" className="pay-logo" />
                          </NavLink>
                          </div>
                          <div className="pay-company">
                          

                          </div>
                          <div className="pay-company">
                          

                          </div>
                          <div className="pay-company">
                          

                          </div>
                          <div className="pay-company">
                          

                          </div>
                        
                        
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

export default  Upi;