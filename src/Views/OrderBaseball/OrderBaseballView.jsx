import React from 'react'
import { Container, Row, Col, Button, Stack, Form, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const OrderBaseballView = () => {
    const navigate = useNavigate()
    return (
        <>
            <Container>
                <Row>
                    <Col md={8} className='mb-4'></Col>
                    <Col md={2} className='mb-4'>
                        <Stack gap={4}>
                            <Button variant="dark" onClick={() => navigate('/baseball')}>Cancelar</Button>
                        </Stack>
                    </Col>
                    <Col md={2} className='mb-4'>
                        <Stack gap={4}>
                            <Button variant="success" onClick={() => navigate('/baseball')}>Guardar</Button>
                        </Stack>
                    </Col>
                    <Col md={8} className='mb-4'>
                        <Stack gap={4}>
                        <Card>
                            <Card.Header>Producto</Card.Header>
                            <Card.Body>
                                <Form.Group className="mb-3" controlId="formBasicText3">
                                <Form.Label>Nombre Producto</Form.Label>
                                <Form.Control type="text" placeholder="Nombre producto" defaultValue={"probando"} name='name'/>
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
                                <Form.Control type="text" defaultValue={"probando"} name='price'/>
                                </Form.Group>
                            </Card.Body>
                            </Card>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default OrderBaseballView