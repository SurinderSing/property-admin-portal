import React from 'react'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import AddUserForm from '../../components/manageuser/adduser/AddUserForm'

const AddAgent = () => {
    return (
        <>
            <Breadcrumb title='Add Agent' titleText='Welcome To Admin Panel' parent='Agents' />
            <Container fluid={true}>
                <Row>
                    <Col lg='12'>
                        <Card className="card">
                            <CardHeader className="card-header pb-0">
                                <h5>Add Agent details</h5>
                            </CardHeader>
                            <CardBody className="card-body admin-form">
                                <AddUserForm />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default AddAgent