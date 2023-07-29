import React from 'react'
import { TrendingUp } from 'react-feather'
import { Card, CardBody, Col, Media } from 'reactstrap'

const Status = () => {
    return (
        <>
            <Col xl='3 xl-6' md='6' className="project-widgets">
                <Card>
                    <CardBody>
                        <Media>
                            <div className="widget-icon bg-primary-light">
                                <i className="fab fa-foursquare" />
                            </div>
                            <Media body>
                                <span>
                                    Completed
                                    <span className="font-success">
                                        + 20%
                                        <TrendingUp />
                                    </span>
                                </span>
                                <h4>Total projects</h4>
                                <span className="status-history">New users</span>
                            </Media>
                        </Media>
                    </CardBody>
                </Card>
            </Col>
            <Col xl='3 xl-6' md='6' className="project-widgets">
                <Card>
                    <CardBody>
                        <Media>
                            <div className="widget-icon bg-warning-light">
                                <i className="fab fa-behance" />
                            </div>
                            <Media body>
                                <span>
                                    Completed
                                    <span className="font-success">
                                        + 15%
                                        <TrendingUp />
                                    </span>
                                </span>
                                <h4>Behance project</h4>
                                <span className="status-history">Users</span>
                            </Media>
                        </Media>
                    </CardBody>
                </Card>
            </Col>
            <Col xl='3 xl-6' md='6' className="project-widgets">
                <Card>
                    <CardBody>
                        <Media>
                            <div className="widget-icon bg-success-light">
                                <i className="fab fa-angellist" />
                            </div>
                            <Media body>
                                <span>
                                    <span className="font-success">
                                        Coming soon
                                    </span>
                                </span>
                                <h4>10,000</h4>
                                <span className="status-history">Agents</span>
                            </Media>
                        </Media>
                    </CardBody>
                </Card>
            </Col>
            <Col xl='3 xl-6' md='6' className="project-widgets">
                <Card>
                    <CardBody>
                        <Media>
                            <i className="fab fa-cloudscale" />
                            <Media body>
                                <span>
                                    Monthly
                                    <span className="font-success">
                                        + 10%
                                        <TrendingUp />
                                    </span>
                                </span>
                                <h4>36,000</h4>
                                <span className="status-history"> New project</span>
                            </Media>
                        </Media>
                    </CardBody>
                </Card>
            </Col>
        </>
    )
}

export default Status