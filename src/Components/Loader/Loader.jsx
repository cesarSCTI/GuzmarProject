import React from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <Container className='text-center'>
        <Row>
            <Col md={12}>
                <Spinner animation="grow" />
            </Col>
        </Row>
    </Container>
  )
}

export default Loader