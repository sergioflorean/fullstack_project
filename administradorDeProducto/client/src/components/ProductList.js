import React, { useState, useEffect } from "react"
import { deleteProduct, getAllProducts, createProduct } from '../services/product.service';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router-dom";
import DeleteButton from "./DeleteButton";



const ProductList = () => {
    const [products, setProducts] = useState([]);
    let navigate = useNavigate();
    const { id } = useParams();
    

    const getProductsFromService = async () => {
        try {
            const list = await getAllProducts();
            console.log(list.data);
            setProducts(list.data.product);
            

        } catch (error) {
            console.log(error);
        }
        console.log(products)
    }
    useEffect(() => {
        getProductsFromService();
    }, [  ])

    const removeProduct = async (id) => {
        try {
            const response = await deleteProduct(id);
            console.log( response)
            const newProductList = products.filter((product) => product._id !== id);
            setProducts(newProductList);
        } catch (error) {
            
        }
    }
    
    return (
        <div>
            {products.map((product) => (
                <ul key={product._id}>

                    <li>
                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                        <Link to={ (`/${product._id}/edit`)}>
                            <button>Edit</button>
                        </Link>
                        {/* <button onClick={navigate(`/${product._id}`)}>Edit</button> */}
                        <DeleteButton id={product._id} removeProduct={removeProduct}/>
                        <button onClick={() => removeProduct(product._id)}>Delete</button>
                       
                    </li>
                    
                </ul>
            ))}

        </div>
    )
}

export default ProductList;