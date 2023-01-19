import "./paymethod.scss";
import { ArrowForward, Email } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

function Paymethod() {
  return (
    <div className="paymethod" id="paymethod">
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
                <p  >Purpose of payment</p>
                <p className="number">Test</p>

                </div>
                <div className="second-container">

                    <div className="second-form-container">
                        <h3>Available Payment Method</h3>
                        <hr className="hr-heading" />
                        <p>Total Payable Amount : ₹ 13.00</p>
                        <div className="form-container">
                        <div class="container text-center">
                        <div class="row">
                      
                       <div class="col-6 ">
                        <div className="methodClick">
                          <span>UPI</span>
                          <NavLink to="/upi" >
                        <div className="arrowButton">
                            <ArrowForward className="icon"/>
                          </div>
                          </NavLink>
                         
                          </div>
                       </div>
                     </div>
                        <div class="row">
                       
                       <div class="col-6 col-md-3">
                       <div className="methodClick">
                          <span>Net Banking</span>
                        <div className="arrowButton">
                            <ArrowForward className="icon"/>
                          </div>
                          </div>
                       </div>
                     </div>
                        <div class="row">
                       
                       <div class="col-6 col-md-3">
                       <div className="methodClick">
                          <span>Credit/Debit Cards</span>
                        <div className="arrowButton">
                            <ArrowForward className="icon"/>
                          </div>
                          </div>                       
                          </div>
                     </div>
                        <div class="row">
                       <div class="col-6 col-md-3">
                       <div className="methodClick">
                          <span></span>
                        <div className="arrowButton">
                            <ArrowForward className="icon"/>
                          </div>
                          </div>
                          </div>
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

    
    </div>
  )
}

export default Paymethod;