import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export const useOrderBaseball = () =>{
    const [orders, setOrders] = useState()
    const [order, setOrder] = useState()
    const [list, setList] = useState([])
    const {id} = useParams()
    const [api] = useState('http://127.0.0.1:8000/api/baseball/')

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

    const requestOrders = async () =>{
        const response = await fetch(api);
        const data = await response.json().finally()
        setOrders(data.results);
    }

    const requestOrder = async () =>{
        const response = await fetch(api + id);
        const data = await response.json().finally()
        setOrder(data.results);
    }
    const addList = (item) =>{
        setList([...list, item])
        console.log(list)
    }

    return{orders, order, requestOrder, requestOrders, dateFormater, addList, list}
}