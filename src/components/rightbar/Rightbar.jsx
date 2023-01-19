import { CopyAll, MarkEmailRead, MarkEmailUnread, Notifications, Share } from "@mui/icons-material";
import "./rightbar.scss";

function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="wrapper">
        <div className="rightbarContainer">
          <div className="rightbarTop">
            <h5>Payment Terminal</h5>
            <div className="inputShare">
            <input type="text" placeholder="letspe.in/werrt123"/>
            <Share className="icon"/>
            <CopyAll className="icon" />
            </div>
       
          </div>
          <div className="rightbarCenter"></div>
          <div className="rightbarBottom">
           <div className="rightbatBottomContent">
            <Notifications className="icon" />
            <h5>Notifications</h5>
            <MarkEmailUnread className="icon" />
            <span>Unread Messages : 21</span>
          
            <MarkEmailRead className="icon" />
            <span>Read Messages : 349</span>
           
            <MarkEmailRead className="icon" />
            <span>Total Transactions : 21</span>
           </div>
       
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightbar;