import React, {useEffect} from 'react'
import { Card, Col, Container, Row, Form, Stack, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import TableList from '../../Components/Table/TableList';
import { useCotization } from '../../Hooks/Cotizations/useCotization';

const CotizationView = () => {
  const navigate = useNavigate();
  const{cotization, requesCotization, handleChange, deleteCotization, status, setStatus} = useCotization()

  useEffect(()=>{
    requesCotization()
  },[])

  return (
    <form onChange={handleChange}>
    <Container>
      <Row>
        <Col md={8} className='mb-4'>
          <Stack direction="horizontal" gap={4}>
            <h4><Badge pill bg="primary">{cotization.cotizationName}</Badge></h4>
          </Stack>
        </Col>
        <Col sm={6} md={2} className='mb-4'>
          
        </Col>
        <Col sm={6} md={2} className='mb-4'>
        <Stack gap={4}>
            <Button variant='dark' onClick={()=>navigate('/cotizaciones/')}>Atras</Button>
          </Stack>
        </Col>
        <Col md={12} className='mb-4'>
          <Stack gap={4}>
            <Card>
              <Card.Header>Cotizacion</Card.Header>
              <Card.Body>
                <Form.Group className="mb-3" controlId="formBasicText3">
                  <Form.Label>Nombre Cotizacion</Form.Label>
                  <Form.Control type="text" placeholder="Nombre Cotizacion" defaultValue={cotization.cotizationName} name='cotizationName'/>
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
                <TableList items={cotization} />
              </Card.Body>
            </Card>
          </Stack>
        </Col>
        <Col md={4} className='mb-4'>
          <Stack gap={4}>
            <Card>
              <Card.Header>Notas</Card.Header>
              <Card.Body>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows={3} defaultValue={cotization.note} name='note'/>
                </Form.Group>
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Cliente</Card.Header>
              <Card.Body>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" defaultValue={cotization.emailClient} name='emailClient'/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicText">
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
            <Button variant='danger' onClick={()=>setStatus(!status)}>Eliminar</Button>
          </Stack>
        </Col>
        {
              status
              ?
              <>
                <Col md={8} className='mb-4'>
                </Col>
                <Col md={2} className='mb-4'>
                    <Stack gap={4} >
                        <Button variant='info' onClick={deleteCotization}>Aceptar</Button>
                    </Stack>
                </Col>
                <Col md={2} className='mb-4'>
                    <Stack gap={4} >
                        <Button variant='warning' onClick={()=>setStatus(!status)}>Cancelar</Button>
                    </Stack>
                </Col>
              </>
              :<></>
            }
      </Row>
    </Container>
    </form>
  )
}

export default CotizationView