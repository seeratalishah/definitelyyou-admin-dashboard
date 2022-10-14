
import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProductsPage() {

  const navigate = useNavigate();
  return (
    <div className="product-page">
      <div className="top-bar">
        <h2>All Products</h2>
        <button onClick={()=>navigate('/addproduct')}>Add Product</button>
      </div>
      <div className="nav">
        <button>All</button>
        <button>Active</button>
        <button>Draft</button>
        <button>Archive</button>
      </div>
      <div className="search-product">
        <input type="text" placeholder='search product by name' />
        <select name="" id="">
          <option value="">Sort By</option>
          <option value="">Price</option>
          <option value="">Date</option>
          <option value="">Status</option>
        </select>
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
 
  )
}

export default ProductsPage



