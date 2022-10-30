import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../apis/productApi";
import ConfirmationBox from "../components/ConfirmationBox";
import { deleteProduct } from "../utilities/helpers";

function ProductsPage() {
  const [productList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isConfirmationBoxOPen, setIsConfirmationBoxOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const navigate = useNavigate();
 

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await getAllProducts();
        setProductsList(productsData);
      } catch (error) {
       toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if(loading)
    {
        return <p>Loading...</p>
    }

    const handleDelete = (id) => {
      setSelectedProductId(id);
      setIsConfirmationBoxOpen(true);
     }

     const remove =async ()=>{
      await deleteProduct(selectedProductId, productList, setProductsList);
      setIsConfirmationBoxOpen(false);
     }


  return (
    <div className="product-page">
      <div className="top-bar">
        <h2>All Products</h2>
        <button onClick={() => navigate("/new")}>Add Product</button>
      </div>
      <div className="nav">
        <button>All</button>
        <button>Active</button>
        <button>Draft</button>
        <button>Archive</button>
      </div>
      <div className="search-product">
        <input type="text" placeholder="search product by name" />
        <select name="" id="">
          <option value="">Sort By</option>
          <option value="">Price</option>
          <option value="">Date</option>
          <option value="">Status</option>
        </select>
      </div>
      <ConfirmationBox open={isConfirmationBoxOPen} onConfirm={()=>remove()} onCancel={()=>setIsConfirmationBoxOpen(false)} />
      <table>
        <tr>
          <th>Media</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Size</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
        {
         productList.map((product)=>{
          return(
            <tr>
            <td>
              <img
                src={product.image}
                alt=""
              />
            </td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.rating}</td>
            <td>{product.type}</td>
            <td >
              <div className="action">
                <button onClick={()=>{navigate(`/edit/${product.id}`)}}>Edit</button>
                <button onClick={()=>handleDelete(product.id)}>Delete</button>
              </div>
            </td>
          </tr>
          )
         })
        }
      </table>
    </div>
  );
}

export default ProductsPage;
