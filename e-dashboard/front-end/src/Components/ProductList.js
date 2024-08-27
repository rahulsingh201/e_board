import React ,{useState,useEffect}from "react";
import { Link } from "react-router-dom";

 

const ProductList =()=>{

    const [products,setProducts]=useState([]);
    useEffect(()=>{
        getProducts();
    },[])

    const getProducts =async ()=>{
        let result= await fetch('http://localhost:3006/products');
        result = await result.json();
        setProducts(result);
    }

  const deleteProduct= async (id)=>{
    let result = await  fetch(`http://localhost:3006/product/${id}`,{
        method: 'Delete',
    });
    result = await result.json();
    if(result){
        setProducts();
    }
  };

  const searchHandle = async  (event) => {
    let key = event.target.value;
    if(key){
    let result= await fetch(`http://localhost:3006/search/${key}`);
    result = await result.json();
    if(result){
        setProducts(result)
    }
     }else{
        getProducts();
     
     
     }

    }
  

    return(
        <div className="product-list">
            <h2>Product List</h2>
           <input className="search-box" type="text" placeholder="search product"
           onChange={searchHandle} />
            <ul>
             <li>S.No</li>
             <li>name</li>
             <li>price</li>
             <li>category</li>
             <li>operation</li>
            </ul>

            {
               products.length>0 ? products.map((item,index)=>(
                    <ul key={item._id}>
                        
                        <li>{index + 1}</li>
                        <li>{item.name}</li>
                        <li>${item.price}</li>
                        <li>{item.category}</li>
                        <li><button onClick={()=>deleteProduct(item._id)}>Delete</button>
                        <Link to = {"/update/"+item._id}>Update</Link>

                        </li>

                    </ul>
                ))
                :<h1>No Result Found</h1>
            }
            
            
        </div>
    )
}

export default ProductList;