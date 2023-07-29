import dynamic from 'next/dynamic'
import Link from 'next/link'
import React from 'react'
import { ChevronRight } from 'react-feather'
import { Card, CardBody, CardHeader, Col, Media } from 'reactstrap'
import { SoldChart, soldseries } from '../../data/dashboard/data'

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })

const Soldout = () => {
    return (
        <Col className="col-xl-5 xl-6">
            <Card className="expiring-card">
                <CardHeader>
                    <div className="d-flex">
                        <h5>Sold out</h5>
                        <Link href='/types/appartment' className="arrow-animated">
                            See Details
                            <ChevronRight />
                        </Link>
                    </div>
                </CardHeader>
                <CardBody className="pt-0 expiring-details">
                    <div className="expiring-chart">
                        <div id="Radial-chart" />
                        <Chart options={SoldChart} series={soldseries} type='radialBar' height={380} />
                    </div>
                    <div className="chart-detail">
                        <div className="d-flex">
                            <Media>
                                <div className="with-reload">
                                    <img src="/assets/images/svg/icon/1.svg" className="img-fluid" alt='' />
                                </div>
                                <Media body className="media-body">
                                    <h5>78</h5>
                                    <span className="light-font">Properties</span>
                                </Media>
                            </Media>
                        </div>
                    </div>
                    <div className="legend-exiring">
                        <ul>
                            <li>
                                <div className="d-flex">
                                    <span className="square-series bg-primary" />
                                    <h6>10</h6>
                                </div>
                                <span className="light-font">&gt; 20 Days</span>
                            </li>
                            <li>
                                <div className="d-flex">
                                    <span className="square-series bg-success" />
                                    <h6>50</h6>
                                </div>
                                <span className="light-font">21 - 40 Days</span>
                            </li>
                            <li>
                                <div className="d-flex">
                                    <span className="square-series bg-warning" />
                                    <h6>75</h6>
                                </div>
                                <span className="light-font">41 - 80 Days</span>
                            </li>
                        </ul>
                    </div>
                </CardBody>
            </Card>
        </Col >
    )
}

export default Soldout