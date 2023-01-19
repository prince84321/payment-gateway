import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./dasboard.scss";

function Dashboard() {
  return (
    <div>
        <Topbar />
        <div className="section">
            <Sidebar />
            <Feed />
            <Rightbar />
        </div>
    </div>
  )
}

export default Dashboard