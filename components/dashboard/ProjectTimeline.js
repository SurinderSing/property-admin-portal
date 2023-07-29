import dynamic from 'next/dynamic'
import Link from 'next/link'
import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { Timeoptions, Timeseries } from '../../data/dashboard/data'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const ProjectTimeline = () => {
    return (
        <Col lg='6'>
            <Card>
                <CardHeader>
                    <div className="d-flex">
                        <h5>Project timeline</h5>
                        <Link href='/myproperties/add-property'>
                            + Add project
                        </Link>
                    </div>
                </CardHeader>
                <CardBody className="pt-0">
                    <div className="timeline-container">
                        <div id="timeline-chart">
                            <Chart options={Timeoptions} series={Timeseries} type="rangeBar" height={365} />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col >
    )
}

export default ProjectTimeline