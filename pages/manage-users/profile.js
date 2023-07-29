import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import About from '../../components/manageuser/profile/About'
import Following from '../../components/manageuser/profile/Following'
import Friends from '../../components/manageuser/profile/Friends'
import ProfileDetail from '../../components/manageuser/profile/ProfileDetail'
import RecentChart from '../../components/manageuser/profile/RecentChart'
import RecentProperty from '../../components/manageuser/profile/RecentProperty'
import UserChart from '../../components/manageuser/profile/UserChart'
import { Aboutdata } from '../../data/manage-profile/profiledata'

const Profile = () => {
    return (
        <>
            <Breadcrumb title='User Profile' titleText='Welcome To Admin Panel' parent='Manage Users' />
            <Container fluid={true}>
                <Row>
                    <Col lg='12'>
                        <Row className="user-info">
                            <ProfileDetail />
                            <Col xl='3 xl-6' lg='12' md='5'>
                                <Row className="about-profile">
                                    <Col xl='12 xl-12' lg='6' className="about-info">
                                        <About Aboutdata={Aboutdata} />
                                    </Col>
                                    <Col xl='12 xl-none xl-6' lg='6' className="about-info">
                                        <Friends />
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl='6 xl-6' lg='12' md='7'>
                                <RecentProperty />
                                <RecentChart />
                            </Col>
                            <Col xl='3 xl-6' md='12'>
                                <Row>
                                    <Col xl='12' md='6' className="buyer-chart">
                                        <UserChart />
                                    </Col>
                                    <Col xl='12' md="6" className="follow-list">
                                        <Following />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Profile