import React, {useEffect} from 'react'
import { Container, Row, Col, Button, Stack} from 'react-bootstrap'
import Loader from '../../Components/Loader/Loader'
import { useNavigate } from 'react-router-dom'
import { useOrderBaseball } from '../../Hooks/OrderBaseball/useOrderBaseball'
import ContainerListOrderBaseball from '../../Components/ContainerListOrdersBaseball/ContainerListOrderBaseball'

const OrderBaseballList = () => {
    const navigate = useNavigate()
    const {orders, requestOrders} = useOrderBaseball();

    useEffect(()=>{
        requestOrders()
    }, [])

    return (
        <>
            <Container>
                <Row>
                    <Col md={10} className='mb-4'></Col>
                    <Col md={2} className='mb-4'>
                        <Stack gap={4}>
                            <Button variant="success" onClick={() => navigate('new')}>Nuevo</Button>
                        </Stack>
                    </Col>
                </Row>
            </Container>
            
            {
            !orders
            ?<Loader/>
            :<ContainerListOrderBaseball data={orders} />
            }

        </>
    )
}

export default OrderBaseballList