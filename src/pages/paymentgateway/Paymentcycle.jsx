import "./paymentcycle.scss";
import Filldetail from "../../components/paymentCycle/filldetail/Filldetail";
import Upi from "../../components/paymentCycle/upi/Upi";
import Paymethod from "../../components/paymentCycle/paymethod/Paymethod";
import Verify from "../../components/paymentCycle/verify/Verify";
import Finalpay from "../../components/paymentCycle/finalpay/Finalpay";



function Paymentcycle() {
  return (
    <div className="paymentcycle">
      <div className="slider">

        <Filldetail />
        <Paymethod />
        <Upi />
        <Verify />
        <Finalpay />
      </div>
      </div>
       
        

    
  )
}

export default Paymentcycle;