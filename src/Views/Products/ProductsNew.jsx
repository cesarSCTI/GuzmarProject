import React from 'react'
import { Card, Col, Container, Row, Form, Stack, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { useProduct } from '../../Hooks/Products/useProducts';

const ProductsNew = () => {
    const navigate = useNavigate()
    const {product, handleChange, createProduct} = useProduct();

  return (
    <form onChange={handleChange} >
    <Container>
      <Row>
        <Col md={8} className='mb-4'>
          <Stack direction="horizontal" gap={4}>
            <h4><Badge pill bg="primary">{product.name}</Badge></h4>
          </Stack>
        </Col>
        <Col sm={6} md={2} className='mb-4'>
          <Stack gap={4}>
            <Button variant='dark' onClick={()=>navigate(-1)}>Atras</Button>
          </Stack>
        </Col>
        <Col sm={6} md={2} className='mb-4'>
          <Stack gap={4}>
            <Button variant='success' onClick={createProduct}>Crear Nuevo</Button>
          </Stack>
        </Col>
        <Col md={8} className='mb-4'>
          <Stack gap={4}>
          <Card>
              <Card.Header>Producto</Card.Header>
              <Card.Body>
                <Form.Group className="mb-3" controlId="formBasicText3">
                  <Form.Label>Nombre Producto</Form.Label>
                  <Form.Control type="text" placeholder="Nombre producto" defaultValue={product.name} name='name'/>
                </Form.Group>
              </Card.Body>
            </Card>
          </Stack>
        </Col>
        <Col md={4} className='mb-4'>
          <Stack gap={4}>
            <Card>
              <Card.Header>Costo</Card.Header>
              <Card.Body>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control type="text" defaultValue={product.price} name='price'/>
                </Form.Group>
              </Card.Body>
            </Card>
          </Stack>
        </Col>
      </Row>
    </Container>
    </form>
  )
}

export default ProductsNew