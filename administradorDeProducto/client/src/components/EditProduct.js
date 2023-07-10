import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct, updateProduct } from "../services/product.service";

const EditProduct = () => {
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
    const handleOnChange = e => {
        const { name, value } = e.target
        setOneProduct({
            ...oneProduct,
            [name]: value
        })
        
    }
    console.log("🚀 ~ file: ProductMan.js:18 ~ handleOnChange ~ product:", oneProduct)

    const sendNewProduct = async (e) => {
        try {
            e.preventDefault();
            const response = await updateProduct(id, oneProduct);
            console.log("🚀 ~ file: FormTask.js:26 ~ sendTask ~ response:", response)
            navigate('/home');
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (id) getOneProductFromService();
    }, [id])
    return (

        <>
            <h1>Edit</h1>
            <button onClick={() => navigate('/home')}>Back Home</button>
            <form onSubmit={sendNewProduct}>
                <div>
                    <label htmlFor=""  >Title:</label>
                    <input type="text" value={oneProduct.title} name="title" onChange={handleOnChange} />
                </div>
                <div>
                    <label htmlFor="">Price:</label>
                    <input type="text" value={oneProduct.price} name="price" onChange={handleOnChange} />
                </div>
                <div>
                    <label htmlFor="">Description:</label>
                    <input type="text" value={oneProduct.description} name="description" onChange={handleOnChange} />
                </div>
                <div>
                    <input type="submit" value="submit" />
                    <button onClick={() => navigate('/home')}>Back Home</button>
                </div>


            </form>

        </>


    )
}

export default EditProduct;