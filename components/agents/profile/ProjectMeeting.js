import Link from 'next/link'
import React from 'react'
import { ChevronRight } from 'react-feather'
import { Card, CardBody, Col, Row } from 'reactstrap'
import Friends from '../../manageuser/profile/Friends'

const ProjectMeeting = () => {
    return (
        <Col xl='3 xl-6' lg='12' md='5 xl-index-10'>
            <Row className="about-profile">
                <Col xl='12 xl-12' lg='6'>
                    <Card>
                        <CardBody>
                            <div className="partner-info">
                                <div className="title-about">
                                    <h5>Project meetings</h5>
                                </div>
                                <div className="time-details">
                                    <div>
                                        <ul>
                                            <li>
                                                <img src="/assets/images/avatar/6.jpg" className="img-fluid" alt='' />
                                            </li>
                                            <li>
                                                <img src="/assets/images/avatar/5.jpg" className="img-fluid" alt='' />
                                            </li>
                                            <li>
                                                <img src="/assets/images/avatar/9.jpg" className="img-fluid" alt='' />
                                            </li>
                                        </ul>
                                        <Link href='/manage-users/allusers' className="arrow-animated">
                                            Join now <ChevronRight />
                                        </Link>
                                    </div>
                                    <div>
                                        <h6>4:00 - 5:00 PM</h6>
                                        <span className="label label-light-danger">10 mins left</span>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col xl='12 xl-6' lg='6' className="about-info friend-agent">
                    <Friends />
                </Col>
            </Row>
        </Col>
    )
}

export default ProjectMeeting