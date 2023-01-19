import "./transaction.scss";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";

function Transaction() {
  return (
    <div className='transaction'>
        <Topbar />
     <div className="section">
     <Sidebar />
     <div className="feed-4">
      <div className="wrapper">
        <div className="feedTop">
          
          <h2>Transactions</h2>
          
        </div>
        <div className="feedTop">
        <button type="button" className="btn btn-primary">MID</button>
        <button type="button" className="btn btn-primary">Website ID</button>
        <button type="button" className="btn btn-primary">Acquirer</button>
        <button type="button" className="btn btn-primary">Status</button>
        <button type="button" className="btn btn-primary">Card Type</button>
        <span>From :</span>
        <button type="button" className="btn btn-primary">DD/MM/YY</button>
        <span>To :</span>
        <button type="button" className="btn btn-primary">DD/MM/YY</button>
        <button type="button" className="btn btn-primary">Search</button>
        </div>
        <div className="feedBottom">
  
  <table className="table  table-bordered border-dark ">
  <thead  >
    <tr>
      <th scope="col">Payment ID</th>
      <th scope="col">Order ID</th>
      <th scope="col">Order Amt.</th>
      <th scope="col">Customer Name</th>
      <th scope="col">Email</th>
      <th scope="col">Date</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr className="table-primary">
      
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr className="table-secondary">
      
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr className="table-danger">
      
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr >
    <tr className="table-warning">
      
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr className="table-info">
      
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr className="table-success">
      
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr className="table-info">
      
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr className="table-light">
      
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr className="table-success">
      
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr className="table-primary">
      
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
    
      </div>
      
      
      
    </div>
    </div>
     
     </div>
    </div>
  )
}

export default Transaction