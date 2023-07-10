import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";
import { createProduct, deleteProduct } from '../services/product.service'
import { useFormik } from 'formik';
import * as Yup from 'yup'


const ProductMan = () => {
    const navigate = useNavigate();
    const [errores, setError] = useState([{}])


    const validationSchema = Yup.object({
        title: Yup.string().min(3,"Title must be at least 3 characters").required("required"),
        price: Yup.number().min(1,"Price must be at least 1 character").required("required"),
        description: Yup.string().min(5,"Title must be at least 5 characters").required("required")
    })

    const formik = useFormik({
        initialValues: {
            title: "",
            price: "",
            description: ""
        },
        validationSchema,
        onSubmit: async (values) => {
            console.log("values: ", values);
            try {
                const response = await createProduct(values)
                formik.resetForm();
                console.log("🚀 ~ file: FormTask.js:26 ~ sendTask ~ response:", response)
               

            } catch (error) {
                console.log(error.response.data.error.errors);
                const myError = error.response.data.error.errors
                console.log(myError)
                setError({
                    title: myError.title ? myError.title.message : "",
                    price: myError.price ? myError.price.message : "",
                    description: myError.description ? myError.description.message : "",
                })
                console.log(errores)
            }
        }
    })



    const { handleSubmit, handleChange, handleBlur, setFieldTouched, values, errors, touched } = formik

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        handleChange(e);
        setFieldTouched(name, true);
    };

    /* const [product, setProduct] = useState({
        title: "",
        price: "",
        description: ""
    }
    )
   
    const handleOnChange = e => {
        const {name, value} = e.target
        setProduct({
            ...product,
            [name]: value
        }) 
            console.log("🚀 ~ file: ProductMan.js:18 ~ handleOnChange ~ product:", product)
    }
    const sendProduct = async (e) => {
        try {
            e.preventDefault();
            const response = await createProduct(product)
            console.log("🚀 ~ file: FormTask.js:26 ~ sendTask ~ response:", response)
            
        } catch (error) {
            console.log(error);
        }
    }

     */



    return (
        <div>
            <form action="" onSubmit={handleSubmit}  >
                <h1> Product Manager</h1>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" value={values.title} name='title' onChange={handleInputChange} onBlur={handleBlur} className={touched.title && errors.title ? "is-invalid" : ""} />
                    {touched.title && errors.title && <div className="invalid-feedback">{errors.title}</div>}
                    {touched.title && errores.title && (<div className="invalid-feedback">{errores.title}</div>)}
                </div>
                <div>
                    <label htmlFor="Price">Price</label>
                    <input type="text" value={values.price} name='price' onChange={handleInputChange} onBlur={handleBlur} className={touched.price && errors.price ? "is-invalid" : ""} />
                    {touched.price && errors.price && <div className="invalid-feedback">{errors.price}</div>}
                    {touched.price && errores.price && (<div className="invalid-feedback">{errores.price}</div>)}
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" value={values.description} name='description' onChange={handleInputChange} onBlur={handleBlur} className={touched.description && errors.description ? "is-invalid" : ""} />
                    {touched.description && errors.description && <div className="invalid-feedback">{errors.description}</div>}
                    {touched.description && errores.description && (<div className="invalid-feedback">{errores.description}</div>)}
                </div>
                <input type="submit" value="create" /* onClick={() => window.location.reload(false)} */ />
            </form>
        </div>
    )

}

export default ProductMan;