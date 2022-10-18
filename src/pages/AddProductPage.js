import React from 'react'

function AddProductPage() {
  return (
    <div className="add-product-page">
        <div className="top-bar">
            <h2>Add Product</h2>
            <div className="menu-items">
                <button className='discard'>Discard</button>
                <select name="" id="">
                    <option value="">Status</option>
                </select>
                <button className='save'>Save</button>
            </div>
        </div>
        <div className="product-details">
            <h3>Product Details</h3>
            <div className="input-fields">
                <div className="input-container">
                    <label htmlFor="title">Title</label>
                    <input type="text" id='title' placeholder='Product Title' />
                </div>
                <div className="input-container">
                    <label htmlFor="price">Price Per Item</label>
                    <input type="text" id='price' placeholder='Price Per Item' />
                </div>
                <div className="input-container">
                    <label htmlFor="category">Category</label>
                    <input type="text" id='category' placeholder='Product Category' />
                </div>
                <div className="input-container">
                    <label htmlFor="sizes">Sizes</label>
                    <select name="" id="sizes">
                        <option value="">Sizes</option>
                    </select>
                </div>
                <div className="input-container">
                    <label htmlFor="colors">Colors</label>
                    <select name="" id="colors">
                        <option value="">colors</option>
                    </select>
                </div>
            </div>
            <div className="product-media-container">
                <div className="top-bar">
                <h3>Product Media</h3>
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
    </div>
  )
}

export default AddProductPage