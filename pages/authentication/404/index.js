import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const index = () => {
    return (
        <>
            <div className="page-not-found">
                <Container fluid={true}>
                    <Row>
                        <Col lg='6' md='8' sm='10'>
                            <div className="not-found-img">
                                <img src="/assets/images/svg/3.svg" className="img-fluid" alt='' />
                                <div className="animation-error">
                                    <img src="/assets/images/svg/error.svg" className="img-fluid" alt='' />
                                </div>
                            </div>
                        </Col>
                        <Col lg='6' md='8' sm='10'>
                            <div className="not-found-content">
                                <h2>Sorry...This page is gone.</h2>
                                <p className="font-roboto light-font">We are sorry but the page you are looking for does not exist or has been removed. please check or search again.</p>
                                <div className="btns">
                                    <Link href="/dashboard" className="btn btn-pill btn-gradient">
                                        go to home page
                                    </Link>
                                    <Link href="/dashboard" className="btn btn-pill btn-dashed ms-2">
                                        Report problem
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}

export default index

index.getLayout = function getLayout(index) {
    return (
        <>
            {index}
        </>
    )
}