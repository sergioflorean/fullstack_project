import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getProduct, deleteProduct } from "../services/product.service";
import DeleteButton from "./DeleteButton";

const OneProduct = ({products, setProducts}) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [oneProduct, setOneProduct] = useState({
        title: "",
        price: "",
        description: ""
    });

    const getOneProductFromService = async () => {
        try {
            const response = await getProduct(id);
            console.log(response)
            setOneProduct(response.data.product);
        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        if (id) getOneProductFromService();
    }, [id])

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
            <div>
                Title: {oneProduct.title}
            </div>
            <div>
                Price: ${oneProduct.price}
            </div>
            <div>
                Description: {oneProduct.description}
            </div>
            <div>
                <Link to={`/home`}>
                <DeleteButton id={oneProduct._id} removeProduct={removeProduct}/>
                </Link>
                
                <button onClick={() => navigate('/home')}>Back Home</button>
                {/* <button onClick={navigate(`/${oneProduct._id}`)}>Edit</button> */}
            </div>
            <div>

            </div>


        </div>

    )
}

export default OneProduct;