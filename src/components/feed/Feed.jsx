import { CurrencyRupee } from "@mui/icons-material";
import FeedChart from "./../chart/FeedChart";
import "./feed.scss";

function Feed() {
  return (
    <div className="feed-1">
      <div className="wrapper">
        <div className="feedTop">
          <div className="feedheading">
          <h4>Lets Glance at Your Business</h4>
          </div>
          <div className="feedDropdown">
          <div className="dropdown dropdown-1">
            <a className="btn btn-primary dropdown-toggle" href="*" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Last 7 days
             </a>

            <ul className="dropdown-menu">
           <li><a className="dropdown-item" href="*">Action</a></li>
           <li><a className="dropdown-item" href="*">Another action</a></li>
           <li><a className="dropdown-item" href="*">Something else here</a></li>
          </ul>
           </div>
          <div className="dropdown dropdown-2">
            <a className="btn btn-primary dropdown-toggle" href="*" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Download
             </a>

            <ul className="dropdown-menu">
           <li><a className="dropdown-item" href="*">Action</a></li>
           <li><a className="dropdown-item" href="*">Another action</a></li>
           <li><a className="dropdown-item" href="*">Something else here</a></li>
          </ul>
           </div>
          </div>
          
        </div>
        <div className="feedBottom">
          <div className="feedBottomcontainer">
          <div className="feedBottomTop">
            <ul>
                <li>
                <span className="feedbottomItem">Transactions</span>
                  <CurrencyRupee className="feedbottomIcon"/>
                  <span>3940.90</span>
                </li>
              </ul>
            </div>
            <div className="feedBottomTop">
             
            <ul>
                <li >
                <span className="feedbottomItem">Settlements</span>
                  <CurrencyRupee className="feedbottomIcon" />
                  <span>567413.90</span>
                </li>
              </ul>
            </div>
            <div className="feedBottomTop">
              <ul>
                <li >
                <span className="feedbottomItem">Refunds</span>
                  <CurrencyRupee className="feedbottomIcon"/>
                  <span>5849.89</span>
                </li>
              </ul>
            
            </div>

          </div>
           
            <div className="charts">
            <FeedChart />
            </div>
           
           </div>
          
      </div>
      
    </div>
  )
}

export default Feed;