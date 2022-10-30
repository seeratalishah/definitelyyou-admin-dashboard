import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast';
import { useLocation, useParams } from 'react-router-dom';
import { addProduct, editProduct, getProductById } from '../apis/productApi';

const initialState = {
    title: "",
    type: "",
    price: "",
    rating: "",
    image:"",
    color:[],
    size:[]
}



function AddProductPage() {

    const [form ,setForm] = useState(initialState);

    const { id } = useParams();


    const location = useLocation();

    useEffect(()=>{
      if(location.pathname === '/new')
      {
          setForm(
              {
                  ...initialState
              }
          )
      }

    },[location])

    useEffect(()=>{
    
        const getProductData = async () =>{
         if(id){
     
           const data = await getProductById(id)
           
           setForm({
             ...data,
                    
         })
         }
        }
     
        getProductData();
     
       },[]);

    const setInputValue = (event)=>{
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })

    }

   

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const data = {
            ...form,
            price: `${form.price} PKR`
        }

        if(id)
        {
           const response = await editProduct(id, data)
    
           if(response.ok){
    
            toast.success("Changes saved successfully");
           }
           else{
            toast.error("Error while fetching data")
           }
      
            return;
                
        }

        const response = await addProduct(data);
        try{
            if(response.ok){
                toast.success("Product added successfully");
            }
        
        }
        catch(err){
            toast.error("Error");
        }
            

    }
  return (
    <form className="add-product-page" onSubmit={handleSubmit}>
        <div className="top-bar">
            <h2>Add Product</h2>
            <div className="menu-items">
                <button className='discard'>Discard</button>
                <select name="" id="">
                    <option value="">Status</option>
                </select>
                <button className='save' type='submit'>Save</button>
            </div>
        </div>
        <div className="product-details">
            <h3>Product Details</h3>
            <div className="input-fields">
                <div className="input-container">
                    <label htmlFor="title">Title</label>
                    <input type="text" id='title' placeholder='Product Title'  name="title" value={form.title} onChange={setInputValue} />
                </div>
                <div className="input-container">
                    <label htmlFor="price">Price Per Item</label>
                    <input type="text" id='price' placeholder='Price Per Item'  name="price" value={form.price} onChange={setInputValue} />
                </div>
                <div className="input-container">
                    <label htmlFor="category">Category</label>
                    <input type="text" id='category' placeholder='Product Category'  name="type" value={form.type} onChange={setInputValue} />
                </div>
                <div className="input-container">
                    <label htmlFor="sizes">Sizes</label>
                    <select name="size" id="sizes" value={form.size} onChange={setInputValue}>
                        <option value="">Sizes</option>
                        <option value="xs">xs</option>
                        <option value="s">s</option>
                        <option value="m">m</option>
                        <option value="l">l</option>
                        <option value="xl">xl</option>
                        <option value="xxl">xxl</option>
                    </select>
                </div>
                <div className="input-container">
                    <label htmlFor="colors">Colors</label>
                    <select name="color" id="colors" value={form.color} onChange={setInputValue}>
                        <option value="">colors</option>
                        <option value="blue">blue</option>
                        <option value="red">red</option>
                        <option value="orange">orange</option>
                        <option value="yellow">yellow</option>
                    </select>
                </div>
            </div>
            <div className="product-media-container">
                <div className="top-bar">
                <h3>Product Media</h3>
                <input type="text" name='image' value={form.image} onChange={setInputValue} />
                <button>Upload Image</button>
                </div>
                <div className="product-media">
                    <div className="image-container">
                        <img src="https://pk.khaadi.com/media/catalog/product/e/s/est22429_purple_1_5.jpg?width=633&height=950&canvas=633:950&quality=95&bg-color=255,255,255&fit=bounds" alt="" />
                    </div>
                    <div className="image-container">
                        <img src="https://pk.khaadi.com/media/catalog/product/e/s/est22429_purple_1_5.jpg?width=633&height=950&canvas=633:950&quality=95&bg-color=255,255,255&fit=bounds" alt="" />
                    </div>
                </div>
            </div>

            <div className="product-description">
                <label htmlFor="desc">Description</label>
                <textarea name="" id="desc" cols="30" rows="10"></textarea>
            </div>
        </div>
    </form>
  )
}

export default AddProductPage