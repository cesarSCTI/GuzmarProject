import React from 'react'
import ContainerListCotization from '../../Components/ContainerListCotization/ContainerListCotization'
import { Container, Row, Col, Stack, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const CotizationsList = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Row>
          <Col md={10} className='mb-4'></Col>
          <Col md={2} className='mb-4'>
            <Stack gap={4}>
              <Button variant="success" onClick={() => navigate('new')}>Nueva</Button>
            </Stack>
          </Col>
        </Row>
      </Container>
      <ContainerListCotization />
    </>

  )
}

export default CotizationsList