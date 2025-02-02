import { useEffect } from 'react'
import { Container, Row, Col, Stack, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useProduct } from '../../Hooks/Products/useProducts'
import ContainerListProducts from '../../Components/ContainerListProducts/ContainerListProducts'
import Loader from '../../Components/Loader/Loader'

const ProductsList = () => {
    const navigate = useNavigate();
    const {requestProducts, products} = useProduct()

    useEffect(()=>{
        requestProducts()
    },[])

    return (
        <>
            <Container>
        <Row>
            <Col md={10} className='mb-4'></Col>
            <Col md={2} className='mb-4'>
            <Stack gap={4}>
                <Button variant="success" onClick={()=>navigate('new')}>Nuevo</Button>
            </Stack>
            </Col>
        </Row>
        </Container>
        {
            !products
            ?<Loader/>
            :<ContainerListProducts data={products}/>
        }
        
        </>
    )
}

export default ProductsList