import { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { productDefault } from "../../Views/Products/objectProduct";

export const useProduct = () => {

    const [products, setProducts] = useState()
    const [product, setProduct] = useState(productDefault)
    const [status, setStatus] = useState(false)
    const [api] = useState('http://127.0.0.1:8000/api/products/')
    const { id } = useParams();
    const navigate = useNavigate()

    const requestProducts = async () => {
        const response = await fetch(api);
        const data = await response.json().finally()
        setProducts(data.results);
    }

    const requestProduct = async () => {
        const response = await fetch(`${api}${id}`);
        const data = await response.json().finally()
        setProduct(data.results);
    }

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const createProduct = () => {
        fetch(api, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(product), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then((response) => {
                console.log('Success:', response)
                navigate(`../products/${response.results.id}`)
            })
    }

    const updateProduct = () => {
        fetch(`${api}${id}`, {
            method: 'PUT', // or 'PUT'
            body: JSON.stringify(product), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then((response) => {
                console.log('Success:', response)
                navigate(`../products/${response.results.id}`)
            })

    }

    const deleteProduct = () => {
        if(status){
        fetch(`${api}${id}`, {
            method: 'DELETE', // or 'PUT'
            //body: JSON.stringify(product), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then((response) => {
                console.log('Success:', response)
                navigate(`../products/`)
            })
        }

    }

        return { 
            status, 
            products, 
            product, 
            requestProducts, 
            handleChange, 
            createProduct, 
            requestProduct, 
            updateProduct, 
            deleteProduct, 
            setStatus
        }

    }