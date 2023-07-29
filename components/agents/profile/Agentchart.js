import dynamic from 'next/dynamic'
import Link from 'next/link'
import React from 'react'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { Monthlydata, Useroptions, userseries } from '../../../data/manage-profile/profiledata'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const Agentchart = () => {
    return (
        <Row>
            <Col xl='12' md='6' className="buyer-chart">
                <Card>
                    <CardBody>
                        <div className="title-about">
                            <h5>Total agents</h5>
                        </div>
                        <div className="total-container">
                            <div id="agentchart" />
                            <Chart options={Useroptions} series={userseries} type='donut' width={320} />
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col xl='12' md='6'>
                <Card className="timeline-card timeline-agent">
                    <CardBody>
                        <div className="partner-info">
                            <div className="title-about">
                                <h5>Monthly installment</h5>
                            </div>
                            <div className="timeline-pay">
                                <ul>
                                    {
                                        Monthlydata && Monthlydata.map((item, i) => {
                                            return (
                                                <li key={i} className={item.class ? item.class : ''}>
                                                    <div>
                                                        <i className="fas fa-check-circle" />
                                                        <span>{item.time}</span>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <div className="timeline-right">
                                    <h5 className="mb-0">$4.500</h5>
                                    <Link href='/agents/invoice'>View Details</Link>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )
}

export default Agentchart