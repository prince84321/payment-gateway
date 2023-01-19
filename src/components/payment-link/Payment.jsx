import "./payment.scss";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import { CopyAll } from "@mui/icons-material";
import { NavLink } from "react-router-dom";


function Payment() {
  return (
    <div className='payment'>
     <Topbar />
     <div className="section">
     <Sidebar />
     <div className="feed-6">
      <div className="wrapper">
        <div className="feedTop">
          <h2>Generate Payment Link</h2>
        </div>
        <div className="feedBottom">

          <div className="paymentInputlink">
            <input type="text" placeholder="www.pay.letspe.com/ee34e3/efr445/fefef" />
            <CopyAll className="icon" />
          </div>

<div className="container text-center">
  
<div className="row">
    <div className="col-6 col-md-3">
    <span>Select Website:</span>
    </div>
    <div className="col-6 col-md-3">
    <div className="dropdown ">
                 <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Website 1
                 </button>
                <ul className="dropdown-menu">
                   <li><a className="dropdown-item" href="*">Action</a></li>
                  <li><a className="dropdown-item" href="*">Another action</a></li>
                  <li><a className="dropdown-item" href="*">Something else here</a></li>
                </ul>
            </div>
    </div>
    <div className="col-6 col-md-3">
    <span>Enter Amount :</span>
    </div>
    <div className="col-6 col-md-3">
    <input type="text" placeholder="XXXXXXX" />
    </div>
  </div>
  <div className="row">
    <div className="col-6 col-md-3">
    <span>Product Name :</span>
    </div>
    <div className="col-6 col-md-3">
    <div className="dropdown ">
                 <button className="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Product 1
                 </button>
                <ul className="dropdown-menu">
                   <li><a className="dropdown-item" href="*">Action</a></li>
                  <li><a className="dropdown-item" href="*">Another action</a></li>
                  <li><a className="dropdown-item" href="*">Something else here</a></li>
                </ul>
            </div>
    </div>
   
  </div>

  <div className="row">
    <div className="col-6 col-md-3">
    <span><b> Payer's Details :</b></span>
    </div>
    
  </div>

  <div className="row">
    <div className="col-6 col-md-3">
    <span>Full Name:</span>
    </div>
    <div className="col-6 col-md-3">
    <input type="text" placeholder="Full mame" required/>
    </div>
    <div className="col-6 col-md-3"><span>Email ID:</span></div>
    <div className="col-6 col-md-3"><input type="Email" placeholder="Email" required/></div>
  </div>

  <div className="row">
    <div className="col-6 col-md-3">
    <span>Contact No. :</span>
    </div>
    <div className="col-6 col-md-3">
    <input type="number" placeholder="Number" required/>
    </div>
  
  </div>


 
  <div className="row">
    <div className="col-6 col-md-3"><span>Address :</span></div>
    <div className="col-6 col-md-3">
    <input type="text" placeholder="House/Flat No" />
    </div>
    <div className="col-6 col-md-3">
    <input type="text" placeholder="Streat Name" />
    </div>
    <div className="col-6 col-md-3">
    <input type="text" placeholder="Road Name" />
    </div>
  </div>
  <div className="row">
    <div className="col-6 col-md-3">
    
    </div>
    <div className="col-6 col-md-3">
      <input type="text" placeholder="State" />
    </div>
    <div className="col-6 col-md-3">
      <input type="text" placeholder="Countery" />
    </div>
    <div className="col-6 col-md-3">
      <input type="text" placeholder="Postal code" />
    </div>
  </div>
  
          
     </div>
      
          
      <div className="button-3">

      <NavLink to="/otp-verification">
  <button type="submit" className="btn btn-primary btn-1">Submit</button>
  </NavLink>
  <NavLink to="/dashboard">
      <button type="button" className="btn btn-primary btn-1">Go Back</button>
      </NavLink>
      </div>
      </div>
      
    </div>
    </div>
     
     </div>
    </div>
  )
}

export default Payment