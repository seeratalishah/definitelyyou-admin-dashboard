import React from 'react'

function CustomersPage() {
  return (
    <div className='customers-page'>
        <h2>All Customers</h2>
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
  )
}

export default CustomersPage