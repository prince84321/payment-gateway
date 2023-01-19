import { Email } from "@mui/icons-material";
import "./filldetail.scss";
import { NavLink } from "react-router-dom";


function Filldetail() {

  
  return (
    <div className="filldetail" id="filldetail">
        <div className="wrapper">
            <div className="paymentLogo">
              <h1>Lets Pe</h1>
            </div>
            <div className="main-container">
                <div className="main-container-text">
                <span>Paying To</span>
                <h2>TEST</h2>
                <p>Payment ID</p>
                <p className="number">1221233234436664</p>

                </div>
                <div className="second-container">

                    <div className="second-form-container">
                        <span>Complete your Payment Details</span>
                        <div className="form-container">
                        <div class="container text-center">
                        <div class="row">
                       <div class="col-6 col-md-6"><span>Full Name</span></div>
                       <div class="col-6 ">
                        <input type="text" placeholder="Name" required />
                       </div>
                     </div>
                        <div class="row">
                       <div class="col-6 col-md-6"><span>Email ID</span></div>
                       <div class="col-6 col-md-3">
                        <input type="email" placeholder="Email" required />
                       </div>
                     </div>
                        <div class="row">
                       <div class="col-6 col-md-6"><span>Contact Number</span></div>
                       <div class="col-6 col-md-3">
                        <input type="number" placeholder="Contact number" required />
                       </div>
                     </div>
                        <div class="row">
                       <div class="col-6 col-md-6"><span>Purpose of Payment</span></div>
                       <div class="col-6 col-md-3">
                        <input type="text" placeholder="Purpose of payment" required />
                       </div>
                     </div>
                        <div class="row">
                       <div class="col-6 col-md-6"><span>Total Payable Amount</span></div>
                       <div class="col-6 col-md-3">
                        <input type="number" placeholder="Total Amount" required />
                       </div>
                     </div>
                          </div>
                        </div>
                        <div className="button">
                       <NavLink to="/paymethod">
                        <button type="button" class="btn btn-primary ">Select Payment Method</button>
                        </NavLink>
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

export default Filldetail;