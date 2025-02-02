import React, { useEffect } from 'react'
import { Card, Col, Container, Row, Form, Stack, Button, Badge, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { useCotization } from '../../Hooks/Cotizations/useCotization';
import { useProduct } from '../../Hooks/Products/useProducts';
import Loader from '../../Components/Loader/Loader';

const CotizationNew = () => {
  const navigate = useNavigate()
  const { handleChange, cotization, addProduct, removeProduct, lessProduct, createCotization, handleProduct } = useCotization();
  const { products, requestProducts } = useProduct();

  useEffect(() => {
    requestProducts()
  }, [])

  return (
    <>
      <Container>
        <Row>
          <Col md={8} className='mb-4'>
            <Stack direction="horizontal" gap={4}>
              <h4><Badge pill bg="primary">{cotization.cotizationName}</Badge></h4>
            </Stack>
          </Col>
          <Col sm={6} md={2} className='mb-4'>
            <Stack gap={4}>
              <Button variant='dark' onClick={() => navigate(-1)}>Atras</Button>
            </Stack>
          </Col>
          <Col sm={6} md={2} className='mb-4'>
            <Stack gap={4}>
              <Button variant='success' onClick={createCotization}>Crear Cotizacion</Button>
            </Stack>
          </Col>
          <Col md={12} className='mb-4'>
            <Stack gap={4}>
              <Card>
                <Card.Header>Cotizacion</Card.Header>
                <Card.Body>
                  <Form.Group className="mb-3" controlId="formBasicText3" onChange={handleChange}>
                    <Form.Label>Nombre Cotizacion</Form.Label>
                    <Form.Control type="text" placeholder="Nombre Cotizacion" defaultValue={cotization.cotizationName} name='cotizationName' />
                  </Form.Group>
                </Card.Body>
              </Card>
            </Stack>
          </Col>
          <Col md={8} className='mb-4'>
            <Stack gap={4}>
              <Card className='maxHeight'>
                <Card.Header>Articulos a cotizar</Card.Header>
                <Card.Body>
                  <Table responsive hover>
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Cant</th>
                        <th>Precio</th>
                        <th>Subtotal</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cotization.cotization_products.map((ele) => {
                          return (
                            <tr key={ele.id}>
                              <td>{ele.name}</td>
                              <td>{ele.qty}x</td>
                              <td>
                                <Form.Group className="mb-3" controlId={ele.id}>
                                  <Form.Control  size='sm' type="text" defaultValue={ele.price} name={ele.id} onChange={(e)=>handleProduct(e, ele)}/>
                                </Form.Group>
                              </td>
                              <td>${ele.subtotal}</td>
                              <td>
                                <Button variant='warning' size="sm" onClick={()=>lessProduct(ele)}>-</Button>
                              </td>
                              <td>
                                <Button variant='danger' size="sm" onClick={() => removeProduct(ele.id)}>x</Button>
                              </td>
                            </tr>
                          )
                        }
                        )
                      }
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>Agregar</Card.Header>
                <Card.Body>
                  <Row>
                    {
                      !products
                        ? <Loader />
                        :
                        products.map(ele => {
                          return (
                            <Col md={4} className='mb-4' key={ele.id}>
                              <Stack gap={1}>
                                <Button variant='outline-dark' onClick={() => addProduct(ele)}>
                                  {ele.name}<br />
                                  <b>${ele.price}</b>
                                </Button>
                              </Stack>
                            </Col>
                          )
                        })
                    }
                  </Row>
                </Card.Body>
              </Card>
            </Stack>
          </Col>
          <Col md={4} className='mb-4'>
            <Stack gap={4}>
              <Card>
                <Card.Header>Notas</Card.Header>
                <Card.Body>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" onChange={handleChange}>
                    <Form.Control as="textarea" rows={3} defaultValue={cotization.note} name='note' />
                  </Form.Group>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>Cliente</Card.Header>
                <Card.Body>
                  <Form.Group className="mb-3" controlId="formBasicEmail" onChange={handleChange}>
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" defaultValue={cotization.emailClient} name='emailClient' />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicText" onChange={handleChange}>
                    <Form.Label>Nombre de cliente</Form.Label>
                    <Form.Control type="text" placeholder="Nombre de cliente" defaultValue={cotization.clientName} name='clientName' />
                  </Form.Group>
                </Card.Body>
              </Card>
              <Card>
                <Card.Header>Total de cotizacion</Card.Header>
                <Card.Body>
                  <Card.Title>${cotization.total}</Card.Title>
                </Card.Body>
              </Card>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CotizationNew