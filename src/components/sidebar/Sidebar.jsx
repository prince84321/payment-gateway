import "./sidebar.scss";
import {AccountBalanceOutlined, AccountBox, EmailOutlined, Home, Insights, Payment, WebOutlined, Link } from "@mui/icons-material";
import {NavLink} from "react-router-dom";


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="wrapper">
        <ul>
          <li >
            <NavLink className="links" to="/dashboard">
            <Home className="icon" />
            <span>Dashboard</span>
            </NavLink>
            </li>
          <li>
            <NavLink className="links" to ="/transactions">
            <Insights className="icon" />
            <span>Transactions</span>
            </NavLink>
            </li>
          <li>
          <NavLink className="links" to ="/payment-link">
            <Link className="icon"/>
            <span>Payment Link</span>
            </NavLink>
            </li>
          <li>
          <NavLink className="links" to ="/filldetail">
            <Payment className="icon"/>
            <span>Payment Button</span>
            </NavLink>
            </li>
          <li>
            <EmailOutlined className="icon"/>
            <span>Messages</span>
            </li>
          <li>
            <WebOutlined className="icon" />
            <span>Websites</span>
            </li>
          <li>
            <AccountBalanceOutlined className="icon" />
            <span>Bank Account</span>
            </li>
          <li>
            <AccountBox className="icon" />
            <span>User Mgmt.</span>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;