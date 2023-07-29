import Link from 'next/link'
import React from 'react'
import { ChevronRight } from 'react-feather'
import { Card, CardBody, CardHeader, Col, Media, Row } from 'reactstrap'

const Properies = () => {
    return (
        <Col xl='4 large-12'>
            <Row>
                <Col lg='12 large-6' md='6'>
                    <Card className="all-properties">
                        <CardBody>
                            <Media className="media">
                                <img src="/assets/images/svg/icon/1.svg" className="img-fluid" alt='' />
                                <Media body>
                                    <h4 className="mb-0">45</h4>
                                    <h6 className="light-font">Properties</h6>
                                </Media>
                                <Link href='/myproperties/propertylist' className="arrow-animated">
                                    See all properties
                                    <ChevronRight />
                                </Link>
                            </Media>
                            <ul className="light-box">
                                <li>
                                    <img src="/assets/images/svg/icon/sold.png" className="img-fluid" alt='' />
                                    <div>
                                        <h5>1500</h5>
                                        <span className="light-font">Sale</span>
                                    </div>
                                </li>
                                <li>
                                    <img src="/assets/images/svg/icon/rent.png" className="img-fluid" alt='' />
                                    <div>
                                        <h5>380</h5>
                                        <span className="light-font">Rented</span>
                                    </div>
                                </li>
                                <li>
                                    <img src="/assets/images/svg/icon/unlisted.png" className="img-fluid" alt='' />
                                    <div>
                                        <h5>240</h5>
                                        <span className="light-font">Unlisted</span>
                                    </div>
                                </li>
                            </ul>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg='12 large-6' md='6'>
                    <Card className="invoice-card">
                        <CardHeader className="pb-0">
                            <div>
                                <h5>Last Month</h5>
                            </div>
                        </CardHeader>
                        <CardBody className="calculations">
                            <ul>
                                <li>
                                    <h5 className="font-success">$47,215</h5>
                                    <h6 className="light-font mb-0">Paid invoices</h6>
                                </li>
                                <li>
                                    <h5 className="font-danger">$5,780</h5>
                                    <h6 className="light-font mb-0">Open invoices</h6>
                                </li>
                            </ul>
                            <div className="d-flex">
                                <Link href='/agents/invoice' className="label label-light">
                                    <i className="fas fa-hand-holding-usd me-1" />
                                    Payments Receive
                                </Link>
                                <Link href='/agents/invoice' className="arrow-animated">
                                    View all
                                    <ChevronRight />
                                </Link>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Col>

    )
}

export default Properies