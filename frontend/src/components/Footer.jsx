import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">
                        <p>&copy; Copyright: GustavoSzi Learning, 2021</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;