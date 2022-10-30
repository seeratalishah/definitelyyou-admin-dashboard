import toast from "react-hot-toast";
import { removeProduct } from "../apis/productApi";

export const deleteProduct = async (id, products, setProducts)=>{
    const response = await removeProduct(id);

    if(response.ok){
      const filteredProducts = products.filter((product)=> product.id !== id);
      setProducts(filteredProducts);
      toast.success("Product successfully deleted")
    }
    else
    {
      console.log(response);
      toast.error('Error while fetching data')
    }
}