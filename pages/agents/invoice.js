import React from 'react'
import { Button, Card, CardBody, Col, Container, Row, Table } from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'

const Invoice = () => {
    return (
        <>
            <Breadcrumb title='Invoice' titleText='Welcome To Admin panel' parent='Agents' />
            <Container className="container-lg">
                <Row>
                    <Col lg='12'>
                        <Card className="card">
                            <CardBody className="card-body">
                                <div className="invoice">
                                    <Row>
                                        <Col sm='6'>
                                            <div className="invoice-logo">
                                                <img src="/assets/images/logo/4.png" className="img-fluid for-light" alt='' />
                                                <img src="/assets/images/logo/9.png" className="img-fluid for-dark" alt='' />
                                                <span className="d-block mt-1">hello@sheltos.in</span>
                                                <span className="d-block">289-335-6503</span>
                                            </div>
                                        </Col>
                                        <Col sm='6' className="col-sm-6">
                                            <div className="text-md-end">
                                                <h3>Invoice #5170</h3>
                                                <p className="mb-0">Issued: May<span className="digits"> 18, 2022</span><br />
                                                    Payment Due: July <span className="digits">20, 2022</span></p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <hr />
                                    <div className="address-invoice">
                                        <Row className="light-box row m-0">
                                            <Col md='6'>
                                                <div>
                                                    <h6 className="light-font">Invoice for</h6>
                                                    <h5>Bob Frapples</h5>
                                                    <p className="mb-0 light-font">Mina Road, Dubai, United Arab Emirates</p>
                                                    <p className="mb-0 light-font">Mobile no: +61 052145008</p>
                                                </div>
                                            </Col>
                                            <Col md='6'>
                                                <div>
                                                    <h6 className="light-font">Invoice from</h6>
                                                    <h5>Zack Lee</h5>
                                                    <p className="mb-0 light-font">Mina Road, Dubai, United Arab Emirates</p>
                                                    <p className="mb-0 light-font">Mobile no: +61 84521410</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="table-responsive invoice-table">
                                        <Table className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Decription</th>
                                                    <th>Deposit</th>
                                                    <th>Rate</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Residences can be classified in residence.
                                                    </td>
                                                    <td>
                                                        $400
                                                    </td>
                                                    <td>
                                                        $580
                                                    </td>
                                                    <td>
                                                        $800.00
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Residences can be classified in residence.
                                                    </td>
                                                    <td>
                                                        $300
                                                    </td>
                                                    <td>
                                                        $450
                                                    </td>
                                                    <td>
                                                        $900.00
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td />
                                                    <td />
                                                    <td>
                                                        <h6 className="mb-0">Total</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="mb-0">$1800.00</h6>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <Row className="invoice-note">
                                        <Col md='4'>
                                            <div>
                                                <img src="/assets/images/signature/3.png" className="img-fluid" alt='' />
                                            </div>
                                        </Col>
                                        <Col md='8' className="text-md-end">
                                            <p className="legal"><strong>Thank you for your business!</strong>&nbsp; Payment is expected within 31 days; please process this invoice within that time. There will be a 5% interest charge per month on late invoices.</p>
                                        </Col>
                                        <Col sm='12' className="text-center mt-3">
                                            <Button type="button" className="btn btn-pill btn-gradient">Print</Button>
                                            <Button type="button" className="btn btn-pill btn-dashed ms-2">cancel</Button>
                                        </Col>
                                    </Row>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Invoice