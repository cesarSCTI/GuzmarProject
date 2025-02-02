import React from 'react'
import { Container, Row, Col, Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ContainerListProducts = ({data}) => {
  return (
    <Container>
            <Row>
                <Table responsive striped bordered >
                    <thead>
                        <tr>
                            <th>Nombre producto</th>
                            <th>Costo</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((ele) => {
                                return (
                                    <tr key={ele.id}>
                                        <td>{ele.name}</td>
                                        <td>${ele.price}</td>
                                        <td>
                                            <Link to={`/products/${ele.id}`}>
                                                <Button variant="dark" size='sm'>Ver</Button>
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

export default ContainerListProducts