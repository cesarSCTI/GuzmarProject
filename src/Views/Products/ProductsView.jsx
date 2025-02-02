import React, {useEffect} from 'react'
import { Card, Col, Container, Row, Form, Stack, Button, Badge} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { useProduct } from '../../Hooks/Products/useProducts';

const ProductsView = () => {
    const navigate = useNavigate()
    const {product, handleChange, requestProduct, updateProduct, deleteProduct, status, setStatus} = useProduct();

    useEffect(()=>{
        requestProduct();
    },[])

  return (
    <form onChange={handleChange} >
    <Container>
      <Row>
        <Col md={8} sm={12} className='mb-4'>
          <Stack direction="horizontal" gap={4}>
            <h4><Badge pill bg="primary">{product.name}</Badge></h4>
          </Stack>
        </Col>
        <Col md={2} sm={6} className='mb-4'>
          <Stack gap={4}>
            <Button variant='dark' onClick={()=>navigate('../products')}>Atras</Button>
          </Stack>
        </Col>
        <Col md={2} sm={6} className='mb-4'>
          <Stack gap={4}>
            <Button variant='success' onClick={updateProduct}>Guardar</Button>
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
              <Card.Header>Precio</Card.Header>
              <Card.Body>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control type="text" defaultValue={product.price} name='price'/>
                </Form.Group>
              </Card.Body>
            </Card>
          </Stack>
        </Col>
      </Row>
      <Row>
        <Col md={8} className='mb-4'>
            </Col>
        <Col md={4} className='mb-4'>
            <Stack gap={4}>
                <Button variant='danger' onClick={()=>setStatus(!status)}>Eliminar</Button>
            </Stack>
        </Col>
        {   
            status == false
            ?<></>
            :
            <>
            <Col md={8} className='mb-4'>
            </Col>
            <Col md={2} className='mb-4'>
                <Stack gap={4} >
                    <Button variant='info' onClick={deleteProduct}>Aceptar</Button>
                </Stack>
            </Col>
            <Col md={2} className='mb-4'>
                <Stack gap={4} >
                    <Button variant='warning' onClick={()=>setStatus(!status)}>Cancelar</Button>
                </Stack>
            </Col>
            </>
        }
      </Row>
    </Container>
    </form>
  )
}

export default ProductsView