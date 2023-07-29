import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Agentchart from '../../components/agents/profile/Agentchart'
import ProfileDetail from '../../components/agents/profile/ProfileDetail'
import ProjectMeeting from '../../components/agents/profile/ProjectMeeting'
import Breadcrumb from '../../components/Common/Breadcrumb'
import About from '../../components/manageuser/profile/About'
import Following from '../../components/manageuser/profile/Following'
import RecentChart from '../../components/manageuser/profile/RecentChart'
import RecentProperty from '../../components/manageuser/profile/RecentProperty'
import { AgentAbout } from '../../data/agents/profiledata'
const Profile = () => {
    return (
        <>
            <Breadcrumb title='Agent profile' titleText='Welcome to admin panel' parent='Agents' />
            <Container fluid={true}>
                <Row>
                    <Col lg='12'>
                        <Row className="user-info">
                            <ProfileDetail />
                            <Col xl='3 xl-6' md="6" className="follow-list-item">
                                <Following />
                            </Col>
                            <Col xl='4 xl-6' md='6'>
                                <About Aboutdata={AgentAbout} />
                            </Col>
                            <ProjectMeeting />
                            <Col xl='6 xl-6' lg='12' md='7'>
                                <RecentProperty />
                                <RecentChart />
                            </Col>
                            <Col xl='3 xl-6' md='12'>
                                <Agentchart />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Profile