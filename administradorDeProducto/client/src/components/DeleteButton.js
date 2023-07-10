import React,{useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteProduct, getAllProducts } from '../services/product.service';

const DeleteButton = ({id, removeProduct}) =>{
    
    // const [products, setProducts] = useState([]);
    // const removeProduct = async (id) => {
    //     try {
            
    //         const response = await deleteProduct(id);

    //         console.log( response)
    //         const newProductList = products.filter((product) => product._id !== id);
            
    //         setProducts(newProductList);
    //     } catch (error) {
            
    //     }
    // }
    
    return(
        <div>        
            <button onClick={() => removeProduct(id)}>Delete component</button>
        </div>
    )
}

export default DeleteButton;