import React from 'react'

function DashboardPage() {
  return (
    <div className='dashboard-page'>
        <div className="welcome-container">
            <h2>Welcome to Definitely You</h2>
            <h4>What is definitely Yoy?</h4>
            <p>Definitely You is an E-Commerce Store. We deals in two main categories of clothes stitched and un stitched.
               Selling top quality items in cheap prices. 
            </p>
        </div>
        <div className="new-orders">
            <div className="orders-header">
            <h3>New Orders</h3>
            <button>View All Orders</button>
            </div>
            
            <table>
        <tr>
          <th>Media</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Inventory</th>
          <th>Category</th>
          <th>Status</th>
        </tr>
        <tr>
          <td><img src="https://pk.khaadi.com/media/catalog/product/e/s/est22429_purple_1_5.jpg?width=633&height=950&canvas=633:950&quality=95&bg-color=255,255,255&fit=bounds" alt="" /></td>
          <td>Frock</td>
          <td>1200 PKR</td>
          <td>4 in stock</td>
          <td>Fancy</td>
          <td className='active'>Active</td>
        </tr>
        <tr>
          <td><img src="https://pk.khaadi.com/media/catalog/product/e/s/est22429_purple_1_5.jpg?width=633&height=950&canvas=633:950&quality=95&bg-color=255,255,255&fit=bounds" alt="" /></td>
          <td>Frock</td>
          <td>1200 PKR</td>
          <td>4 in stock</td>
          <td>Fancy</td>
          <td className='active'>Active</td>
        </tr>
      </table>
        </div>
        <div className="customers">
            <div className="customers-header">
            <h3>Customers</h3>
            <input type="text" placeholder='Search Customer by id' />
            <button>View all customers</button>
            </div>
            <table>
        <tr>
          <th>Media</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Inventory</th>
          <th>Category</th>
          <th>Status</th>
        </tr>
        <tr>
          <td><img src="https://pk.khaadi.com/media/catalog/product/e/s/est22429_purple_1_5.jpg?width=633&height=950&canvas=633:950&quality=95&bg-color=255,255,255&fit=bounds" alt="" /></td>
          <td>Frock</td>
          <td>1200 PKR</td>
          <td>4 in stock</td>
          <td>Fancy</td>
          <td className='active'>Active</td>
        </tr>
        <tr>
          <td><img src="https://pk.khaadi.com/media/catalog/product/e/s/est22429_purple_1_5.jpg?width=633&height=950&canvas=633:950&quality=95&bg-color=255,255,255&fit=bounds" alt="" /></td>
          <td>Frock</td>
          <td>1200 PKR</td>
          <td>4 in stock</td>
          <td>Fancy</td>
          <td className='active'>Active</td>
        </tr>
      </table>

        </div>
    </div>
  )
}

export default DashboardPage