import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { cotizationDefault } from '../../Views/Cotizations/objtestCotization';

export const useCotization = () => {

  //const [prueba, setPrueba] = useState(cotizationDefault);
  const [cotizations, setCotizations] = useState();
  const [cotization, setCotization] = useState(cotizationDefault);
  const [listProducts, setListProducts] = useState([])
  const [status, setStatus] = useState(false)
  const [api] = useState('http://127.0.0.1:8000/api/cotizations/')
  const { id } = useParams();
  const navigate = useNavigate()

  const requestAllCotizations = async () => {
    const data = await fetch(api);
    const response = await data.json().finally()
    return setCotizations(response.results)
  }

  const requesCotization = async () => {
    const data = await fetch(`${api}${id}`);
    const response = await data.json().finally()
    return setCotization(response.result)
  }

  const handleChange = (e) => {
    setCotization({
      ...cotization,
      [e.target.name]: e.target.value
    })
  }

  const handleProduct = (e, item) => {
    const auxProduct = listProducts.find(ele => ele.id === item.id)
    auxProduct.price = parseFloat(e.target.value)
    auxProduct.subtotal = parseFloat(auxProduct.price * auxProduct.qty)
    setListProducts([...listProducts])
  }

  const isInList = (item) => {
    return listProducts.some((listProducts) => listProducts.id === item.id)
  }

  const addProduct = (item) => {
    if (isInList(item)) {
      const auxProduct = listProducts.find(ele => ele.id === item.id)
      auxProduct.qty = auxProduct.qty + 1
      auxProduct.subtotal = parseFloat(auxProduct.price * auxProduct.qty)
      return setListProducts([...listProducts])
    }
    else {
      item.qty = 1
      item.subtotal = parseFloat(item.price)
      return setListProducts([...listProducts, { ...item, qty: 1, subtotal: item.price }])
    }
  }

  const lessProduct = (item) => {
    const auxProduct = listProducts.find(ele => ele.id === item.id)
    if (parseFloat(auxProduct.qty) === 1) {
      removeProduct(auxProduct.id)
    }
    else {
      auxProduct.qty = auxProduct.qty - 1
      auxProduct.subtotal = parseFloat(auxProduct.price * auxProduct.qty)
      return setListProducts([...listProducts])
    }
  }

  const removeProduct = (id) => {
    setListProducts(cotization.cotization_products.filter(product => product.id !== id))
    return setCotization({ ...cotization, cotization_products: listProducts.filter(product => product.id !== id) })
  }

  const updateCotizationProductsState = () => {
    const total = listProducts.reduce((acum, item) => acum + parseFloat(item.subtotal), 0)
    const newCotization = { ...cotization, cotization_products: listProducts }
    newCotization.total = total
    return setCotization(newCotization)
  }

  const createCotization = () => {
    fetch(api, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(cotization), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then((response) => {
        console.log('Success:', response)
        navigate(`../cotizaciones/${response.result.id}`)
      })
  }
  
  const deleteCotization = () => {
    fetch(`${api}${id}`, {
      method: 'DELETE', // or 'PUT'
      body: JSON.stringify(cotization), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then((response) => {
        console.log('Success:', response)
        navigate(`../cotizaciones/`)
      })
  }

  const dateFormater = (date) =>{
    const days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Nobiembre", "Diciembre"];
    const newDate = new Date(date.slice(0,-17))
    const day = newDate.getDay()
    const month = newDate.getMonth()
    const numberDay = newDate.getDate()
    const dateFormat =  days[day] + " " + numberDay + " " + months[month] + " " + newDate.getFullYear() 
    return dateFormat
  }

  useEffect(() => {
    updateCotizationProductsState()
  }, [listProducts])



  return {
    cotizations,
    requestAllCotizations,
    cotization,
    requesCotization,
    handleChange,
    handleProduct,
    addProduct,
    listProducts,
    removeProduct,
    lessProduct,
    createCotization,
    deleteCotization, 
    status,
    setStatus,
    dateFormater
  }
}
