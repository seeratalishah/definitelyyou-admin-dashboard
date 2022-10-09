
import React from 'react';

function OrdersPage() {
  return (
    <div>
      <h2>All Orders</h2>
      <div className="table">
      <tr>
        <th>Media</th>
        <th>Product Name </th>
        <th>Price</th>
        <th>Inventery</th>
        <th>Category</th>
        <th>Date</th>
        <th>Customer Id</th>
      </tr>
      <tr>
        <td>img1</td>
        <td>Frock</td>
        <td>1000pkr</td>
        <td>4 in stock</td>
        <td>Fancy</td>
        <td>02-08-22</td>
        <td>01</td>
      </tr>
      <tr>
        <td>img2</td>
        <td>Frock</td>
        <td>2500pkr</td>
        <td>1 in stock</td>
        <td>Fancy</td>
        <td>12-08-22</td>
        <td>05</td>
      </tr>
      <tr>
        <td>img3</td>
        <td>Frock</td>
        <td>2000pkr</td>
        <td>1 in stock</td>
        <td>Fancy</td>
        <td>02-08-22</td>
        <td>01</td>
      </tr>
      <tr>
        <td>img4</td>
        <td>Frock</td>
        <td>3000pkr</td>
        <td>7 in stock</td>
        <td>Fancy</td>
        <td>06-08-22</td>
        <td>09</td>
      </tr>
      <tr>
        <td>img5</td>
        <td>Frock</td>
        <td>1000pkr</td>
        <td>4 in stock</td>
        <td>Fancy</td>
        <td>02-08-22</td>
        <td>01</td>
      </tr>
    </div>
    </div>
   
    
  );
}

export default OrdersPage;