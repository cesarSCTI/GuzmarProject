import React, { useEffect } from 'react'
import { Container, Row, Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCotization } from '../../Hooks/Cotizations/useCotization'
import Loader from '../Loader/Loader'

const ContainerListCotization = () => {

    const { requestAllCotizations, cotizations, dateFormater } = useCotization();

    useEffect(() => {
        requestAllCotizations()
    }, [])

    return (
        <Container>
            <Row>
                <Table responsive striped bordered >
                    <thead>
                        <tr>
                            <th>Nombre cotizacion</th>
                            <th>Nombre cliente</th>
                            <th>Fecha</th>
                            <th>Total de cotizacion</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !cotizations
                            ? <Loader/>
                            :
                            cotizations.map((ele) => {
                                return (
                                    <tr key={ele.id}>
                                        <td>{ele.cotizationName}</td>
                                        <td>{ele.clientName}</td>
                                        <td>{dateFormater(ele.created_at)}</td>
                                        <td>${ele.total}</td>
                                        <td>
                                            <Link to={`/cotizaciones/${ele.id}`}>
                                                <Button variant="dark" size="sm" >Ver</Button>
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Row>
        </Container>
    )
}

export default ContainerListCotization