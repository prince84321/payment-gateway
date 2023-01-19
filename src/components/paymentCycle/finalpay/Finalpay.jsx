import "./finalpay.scss";
import {Email } from "@mui/icons-material";
import {CircularProgress} from "@mui/material";
import Countdown from 'react-countdown';

function Finalpay() {

  return (
    <div className='finalpay' id='finalpay'>
        <div className="wrapper">
            <div className="paymentLogo">
              <h1>Lets Pe</h1>
            </div>
            <div className="main-container">
              <h3>Please Wait While Your Transaction Has Been Processing!!!!</h3>
              <span>"Kindly open your UPI app and Approve this transaction of 239.90 INR"</span>

              <div className="page-loader">
              <CircularProgress className="page-spinner" size={70} />
              </div>
              <p>Remaining Time :  <span> 
              <Countdown className="page-countdown" date={Date.now() + 1800000}>
             </Countdown>
                </span>
              
                </p>
                
            </div>
            <h3>Do Not Cancel or Go back to your Previous Page</h3>
            <div className="email">
                <Email className="icon" />
                <span>support@letspe.com</span>
            </div>
        </div>

    </div>
  
  )
}

export default Finalpay;