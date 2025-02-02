import React from 'react'
import { Container, Row, Col, Button, Stack, Card, Badge, Form, Table, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useOrderBaseball } from '../../Hooks/OrderBaseball/useOrderBaseball'
import { article } from './objectsBaseball'

const OrderBaseballNew = () => {
    const navigate = useNavigate()
    const {addList, list} = useOrderBaseball();
    return (
        <>
            <Container>
                <Row>
                    <Col md={8} className='mb-4'>
                        <Stack direction="horizontal" gap={4}>
                            <h4><Badge pill bg="primary">nombre</Badge></h4>
                        </Stack>
                    </Col>
                    <Col md={2} className='mb-4'>
                        <Stack gap={4}>
                            <Button variant="dark" onClick={() => navigate('/baseball')}>Cancelar</Button>
                        </Stack>
                    </Col>
                    <Col md={2} className='mb-4'>
                        <Stack gap={4}>
                            <Button variant="success" onClick={() => navigate('/baseball')}>Crear</Button>
                        </Stack>
                    </Col>
                    {/* NOMBRE Y ANTICIPO */}
                    <Col md={10} className='mb-4'>
                        <Stack gap={4}>
                        <Card>
                            <Card.Header>Nombre de pedido</Card.Header>
                            <Card.Body>
                                <Form.Group className="mb-3" controlId="formBasicText3">
                                <Form.Control size ="sm" type="text" placeholder="Nombre producto" defaultValue={"product.name"} name='name'/>
                                </Form.Group>
                            </Card.Body>
                            </Card>
                        </Stack>
                        </Col>
                        <Col md={2} className='mb-4'>
                        <Stack gap={4}>
                            <Card>
                            <Card.Header>Anticipo</Card.Header>
                            <Card.Body>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control type="number" defaultValue={0} name='price' size ="sm"/>
                                </Form.Group>
                            </Card.Body>
                            </Card>
                        </Stack>
                    </Col>
                    {/* COSTOS */}
                    <Col md={12} className='mb-4'>
                        <Stack gap={4}>
                            <Card>
                                <Card.Header>Costo</Card.Header>
                                <Card.Body>
                                    <Stack direction='horizontal' gap={3}>
                                        <Form.Group className="mb-3" controlId="costo">
                                            <Form.Label>costo 1</Form.Label>
                                            <Form.Control size ="sm" type="text" placeholder="Nombre producto" defaultValue={"product.name"} name='name'/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="costo">
                                            <Form.Label>costo 2</Form.Label>
                                            <Form.Control size ="sm" type="text" placeholder="Nombre producto" defaultValue={"product.name"} name='name'/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="costo">
                                            <Form.Label>costo 3</Form.Label>
                                            <Form.Control size ="sm" type="text" placeholder="Nombre producto" defaultValue={"product.name"} name='name'/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="costo">
                                            <Form.Label>costo 4</Form.Label>
                                            <Form.Control size ="sm" type="text" placeholder="Nombre producto" defaultValue={"product.name"} name='name'/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="costo">
                                            <Form.Label>concepto extra</Form.Label>
                                            <Form.Control size ="sm" type="text" placeholder="Nombre producto" defaultValue={"product.name"} name='name'/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="costo">
                                            <Form.Label>costo extra</Form.Label>
                                            <Form.Control size ="sm" type="text" placeholder="Nombre producto" defaultValue={"product.name"} name='name'/>
                                        </Form.Group>
                                    </Stack>
                                </Card.Body>
                            </Card>
                        </Stack>
                    </Col>
                    {/* PRODUCTOS */}
                    <Col md={12} className='mb-4'>
                        <Stack gap={4}>
                            <Card className='maxHeight'>
                            <Card.Header>Listado</Card.Header>
                            <Card.Body>
                                <Table responsive hover>
                                    <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th># Jersey</th>
                                            <th>T Jersey</th>
                                            <th>T Pantalon</th>
                                            <th># Pantalon</th>
                                            <th># Gorra</th>
                                            <th># Medias</th>
                                            <th>Subtotal</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {list.length === 0
                                    ?<></>
                                    :
                                    list.map((ele, i)=>{
                                        return(
                                            <tr key={i}>
                                            
                                            <td>
                                                <Form.Control size="sm" type="text" placeholder="nombre " />
                                            </td>
                                            <td>
                                                <Form.Control size="sm" type="number" />
                                            </td>
                                            <td>
                                                <Form.Select aria-label="Talla Jersey" size="sm">
                                                    <option>Selecciona talla Jersey</option>
                                                    <option value="1">Bebe</option>
                                                    <option value="1">6-8</option>
                                                    <option value="1">10-12</option>
                                                    <option value="1">Juvenil</option>
                                                    <option value="1">Chica</option>
                                                    <option value="2">Mediana</option>
                                                    <option value="3">Grande</option>
                                                    <option value="3">XL</option>
                                                    <option value="3">XXL</option>
                                                    <option value="3">XXXL</option>
                                                </Form.Select>
                                            </td>
                                            <td>
                                                <Form.Select aria-label="Talla Pantalon" size="sm">
                                                    <option>Selecciona talla Pantalon</option>
                                                    <option value="1">28</option>
                                                    <option value="2">30</option>
                                                    <option value="3">32</option>
                                                    <option value="3">34</option>
                                                    <option value="3">36</option>
                                                    <option value="3">38</option>
                                                    <option value="3">40</option>
                                                    <option value="3">42</option>
                                                    <option value="3">44</option>
                                                    <option value="3">46</option>
                                                    <option value="3">48</option>
                                                </Form.Select>
                                            </td>
                                            <td>
                                                <Form.Control size="sm" type="number"  />
                                            </td>
                                            <td>
                                                <Form.Control size="sm" type="number"  />
                                            </td>
                                            <td>
                                                <Form.Control size="sm" type="number"  />
                                            </td>
                                            <td>$</td>
                                            <td><Button variant='danger' size='sm' onClick={()=>console.log(i)}>x</Button></td>
                                        </tr>
                                        )
                                    })
                                        
                                    }     
                                    </tbody>
                                </Table>
                            </Card.Body>
                            </Card>
                            {/* BOTON PARA AGREGAR */}
                            <Button variant='outline-primary' onClick={()=>addList(article)}>Agregar Uniforme</Button>
                        </Stack>
                    </Col>
                    {/* CLIENTE | NOTAS | TOTAL */}
                    <Col md={4} className='mb-4'>
                        <Stack gap={4}>
                            <Card>
                            <Card.Header>Cliente</Card.Header>
                            <Card.Body>
                                <Form.Group className="mb-3" controlId="concepto">
                                    <Form.Label>email</Form.Label>
                                    <Form.Control type="text" defaultValue={"product.price"} name='price' rows={2}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="costo">
                                    <Form.Label>Telefono</Form.Label>
                                    <Form.Control type="text" defaultValue={"product.price"} name='price'/>
                                </Form.Group>
                            </Card.Body>
                            </Card>
                        </Stack>
                    </Col>
                    <Col md={4} className='mb-4'>
                        <Stack gap={4}>
                            <Card>
                            <Card.Header>Nota</Card.Header>
                            <Card.Body>
                                <Form.Group className="mb-3" controlId="concepto">
                                    <Form.Control as="textarea" defaultValue={"product.price"} name='price' rows={5}/>
                                </Form.Group>
                            </Card.Body>
                            </Card>
                        </Stack>
                    </Col>
                    <Col md={4} className='mb-4'>
                        <Stack gap={4}>
                            <Card>
                            <Card.Header>Total</Card.Header>
                            <Card.Body>
                                <Form.Group className="mb-3" controlId="concepto">
                                    <Form.Control type="text" defaultValue={"product.price"} name='price' disabled/>
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

export default OrderBaseballNew