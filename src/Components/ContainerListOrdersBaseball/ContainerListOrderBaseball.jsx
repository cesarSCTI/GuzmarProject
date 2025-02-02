import React from 'react'
import { Container, Row, Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useOrderBaseball } from '../../Hooks/OrderBaseball/useOrderBaseball'

const ContainerListOrderBaseball = ({data}) => {
    const {dateFormater} = useOrderBaseball()
  return (
    <Container>
            <Row>
                <Table responsive striped bordered >
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Fecha</th>
                            <th>Total</th>
                            <th>email</th>
                            <th>Teléfono</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((ele) => {
                                return (
                                    <tr key={ele.id}>
                                        <td>{ele.name}</td>
                                        <td>{dateFormater(ele.updated_at)}</td>
                                        <td>${ele.total}</td>
                                        <td>{ele.emailCustomer}</td>
                                        <td>{ele.phoneCustomer}</td>
                                        <td>
                                            <Link to={`/baseball/${ele.id}`}>
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


export default ContainerListOrderBaseball