import React from 'react'

function CustomersPage() {
  return (
    <div className='customers-page'>
        <h2>All Customers</h2>
        <table>
        <tr>
          <th>Customer Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Address</th>
        </tr>
        <tr>
          <td>001</td>
          <td>Seerat</td>
          <td>Ali</td>
          <td>seeratalykhan@gmail.com</td>
          <td>seerat</td>
          <td>g9/1</td>
        </tr>
        <tr>
        <td>001</td>
          <td>Seerat</td>
          <td>Ali</td>
          <td>seeratalykhan@gmail.com</td>
          <td>seerat</td>
          <td>g9/1</td>
        </tr>
      </table>
    </div>
  )
}

export default CustomersPage