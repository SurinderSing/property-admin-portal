import dynamic from 'next/dynamic';
import React from 'react'
import { TrendingUp } from 'react-feather'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { chartoptions, chartseries } from '../../data/dashboard/data';

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalaryChart = () => {
    return (
        <Col xl='8 large-12'>
            <Card className="sales-details">
                <CardBody>
                    <Row>
                        <Col sm='4'>
                            <div className="sales-status">
                                <h5 className="light-font">Sales summary</h5>
                                <div className="status-price">
                                    <h3>$16,230/-</h3>
                                    <span>
                                        last week
                                        <span className="font-success">
                                            + 10%<TrendingUp />
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="chart-legends">
                                <ul>
                                    <li>
                                        <div className="bg-primary circle-label" />
                                        <span>Last week</span>
                                    </li>
                                    <li className="mt-1">
                                        <div className="bg-secondary circle-label" />
                                        <span>Running week</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="last-updated light-box">
                                <span>Last updated</span>
                                <h5>Dec 26, 2022</h5>
                            </div>
                        </Col>
                        <Col sm='8'>
                            <div className="monthly-sales">
                                <div className="icon-box">
                                    <i className="fas fa-chevron-left light-font" />
                                </div>
                                <h6>Octobar, 2022</h6>
                                <div className="icon-box">
                                    <i className="fas fa-chevron-right light-font" />
                                </div>
                            </div>
                            <div className="bar-sales">
                                <div id="sale-chart">
                                    <Chart options={chartoptions} series={chartseries} type="bar" height={350} />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Col>
    )
}

export default SalaryChart