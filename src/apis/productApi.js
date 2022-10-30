import { apiBaseUrl } from "./settings";

export function addProduct(data){
    const token = window.localStorage.getItem("token");
    return fetch(
        `${apiBaseUrl}/api/product/addproduct`,
        {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "x-access-token":token
            },
            body: JSON.stringify(data)
        }
    )
}

export async function getAllProducts(){
    const token = window.localStorage.getItem("token");
   const response = await fetch(`${apiBaseUrl}/api/product/`,{
    headers:{"x-access-token":token}
   });


   if(response.ok){
    const jsonResponse = await response.json();

    return jsonResponse;
   }

   throw new Error("Could not load products");

}

export function removeProduct(id){
    const token = window.localStorage.getItem("token");

    return fetch(`${apiBaseUrl}/api/product/deleteproduct/${id}`, {
            method: "DELETE",
            headers:{"x-access-token":token}
        })
}

export function editProduct(id, data){
    const token = window.localStorage.getItem("token");
    return   fetch(`${apiBaseUrl}/api/product/updateproduct/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "x-access-token":token

        },
        body: JSON.stringify(data)
    })

}

export async function getProductById(id){
    const token = window.localStorage.getItem("token");
    const response = await fetch(`${apiBaseUrl}/api/product/${id}`,
   {
    headers: {"x-access-token":token}
   }
    );
    if(response.ok){
        const jsonResponse = await response.json();
        return jsonResponse;
    }

    throw new Error("There was an error to load product data");
}