import "./invoice.scss";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import { NavLink } from "react-router-dom";


function Invoice() {
  return (
    <div className="invoice">
       <Topbar />
     <div className="section">
     <Sidebar />
     <div className="feed-9">
      <div className="wrapper">
        <div className="feedTop">
          <h3>Generate Invoice</h3>
        </div>
        <div className="feedBottom">

          

<div className="container text-center ">
  
<div className="row ">
    <div className="col-6 col-md-2">
    <span>Invoice No. :</span>
    </div>
    <div className="col-6 col-md-3">
    <input type="text" placeholder="Invoice No." required />
    </div>
    <div className="col-6 col-md-1">
    <span>Amount :</span>
    </div>
    <div className="col-6 col-md-3">
    <input type="text" placeholder="XXXXXXX" />
    </div>
  </div>
  <div className="row">
    <div className="col-6 col-md-2">
    <span>Product Name :</span>
    </div>
    <div className="col-6 col-md-3">
    <input type="text" placeholder="Product Name" required />
    </div>
   
  </div>

  <div className="row">
    <div className="col-6 col-md-3">
    <span><b>Payer's Details :</b></span>
    </div>
    
  </div>

  <div className="row">
    <div className="col-6 col-md-2">
    <span>Full Name:</span>
    </div>
    <div className="col-6 col-md-3">
    <input type="text" placeholder="Full mame" required/>
    </div>
    <div className="col-6 col-md-1"><span>Email Id:</span></div>
    <div className="col-6 col-md-3"><input type="Email" placeholder="Email" required/></div>
  </div>

  <div className="row">
    <div className="col-6 col-md-2">
    <span>Contact Number :</span>
    </div>
    <div className="col-6 col-md-3">
    <input type="number" placeholder="Number" required/>
    </div>
  
  </div>


 
  <div className="row">
    <div className="col-6 col-md-2"><span>Payer's Address :</span></div>
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
    <div className="col-6 col-md-2">
      
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
   
  <div className="row">
    <div className="col-6 col-md-2">
    <span>Terms & Conditions :</span>
    </div>
    <div className="col-6 col-md-3 terms">
    <input type="text" placeholder="Terms & Conditions" required />
    </div>
    <div className="col-6 col-md-1">
    <span>Notes :</span>
    </div>
    <div className="col-6 col-md-3">
    <input type="text" placeholder="Notes" />
    </div>
    </div>
    <NavLink to="/dashboard">
    <button type="submit" className="btn btn-primary btn-1">Submit</button>
    </NavLink>


    <NavLink to="/otp-verification">
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

export default Invoice;