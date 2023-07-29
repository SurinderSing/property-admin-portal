import React from 'react'
import { Card, CardBody, CardHeader, Col, Container, Form, Row } from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import EditPropertyForm from '../../components/myproperties/editProperty/EditPropertyForm'

const EditProperty = () => {
    return (
        <>
            <Breadcrumb title='Edit Property' titleText='Welcome to admin panel' parent='My properties' />
            <Container fluid={true}>
                <Row>
                    <Col lg='12'>
                        <Card className="card">
                            <CardHeader className="card-header pb-0">
                                <h5>Edit property details</h5>
                            </CardHeader>
                            <CardBody className="card-body admin-form">
                                <EditPropertyForm />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default EditProperty