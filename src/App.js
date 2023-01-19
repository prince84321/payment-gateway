
import "./../src/app.scss";

import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/log-In/Login"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Registration from "./pages/registration/Registration";
import Transactions from "./pages/transactions/Transactions";
import Payment from "./components/payment-link/Payment";
import Invoice from "./components/generate-invoice/Invoice";
import Signup from "./components/sign-up/Signup";
import Otp from "./components/otp-verification/Otp"
import Paymentcycle from "./pages/paymentgateway/Paymentcycle";
import Filldetail from "./components/paymentCycle/filldetail/Filldetail";
import Paymethod from "./components/paymentCycle/paymethod/Paymethod";
import Upi from "./components/paymentCycle/upi/Upi";
import Verify from "./components/paymentCycle/verify/Verify";
import Finalpay from "./components/paymentCycle/finalpay/Finalpay";




function App() {
  return (
   <div className="app">
    <BrowserRouter>

    <Routes>
    <Route path="/" element={<Signup />} />
    <Route path="/log-in" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/registration" element={<Registration />} />
    <Route path="/transactions" element={<Transactions />} />
    <Route path="/payment-link" element={<Payment />} />
    <Route path="/generate-invoice" element={<Invoice />} />
    <Route path="/otp-verification" element={<Otp />} />
    <Route path="/paymentcycle" element={<Paymentcycle />} />
    <Route path="/filldetail" element={<Filldetail />}/>
    <Route path="/paymethod" element={<Paymethod />}/>
    <Route path="/upi" element={<Upi />}/>
    <Route path="/verify" element={<Verify />}/>
    <Route path="/finalpay" element={<Finalpay />}/>
   
   
    
    
    </Routes>
    </BrowserRouter>
    
    </div>
    
  );
}

export default App;
