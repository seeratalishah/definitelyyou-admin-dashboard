
import React from 'react'
import { useNavigate } from 'react-router-dom'

function OrdersPage() {

  const navigate = useNavigate();
  return (
    <div className="orders-page">

        <h2>All Orders</h2>
        
     
      <div className="nav">
        <button>All</button>
        <button>To be confirmed</button>
        <button>Unpaid</button>
        <button>Paid</button>
        <button>To be shipped</button>
        <button>Shipped</button>
        <button>Completed</button>
        <button>Cancelled</button>
      </div>
   
      <table>
        <tr>
          <th>Media</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Inventory</th>
          <th>Category</th>
          <th>Date</th>
          <th>Customer ID</th>
        </tr>
        <tr>
          <td><img src="https://pk.khaadi.com/media/catalog/product/e/s/est22429_purple_1_5.jpg?width=633&height=950&canvas=633:950&quality=95&bg-color=255,255,255&fit=bounds" alt="" /></td>
          <td>Frock</td>
          <td>1200 PKR</td>
          <td>4 in stock</td>
          <td>Fancy</td>
          <td>01/10/2011</td>
          <td>1</td>
        </tr>
        <tr>
          <td><img src="https://pk.khaadi.com/media/catalog/product/e/s/est22429_purple_1_5.jpg?width=633&height=950&canvas=633:950&quality=95&bg-color=255,255,255&fit=bounds" alt="" /></td>
          <td>Frock</td>
          <td>1200 PKR</td>
          <td>4 in stock</td>
          <td>Fancy</td>
          <td>01/10/2011</td>
          <td>1</td>
        </tr>
      </table>
    </div>
 
  )
}

export default OrdersPage;



