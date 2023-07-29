import dynamic from 'next/dynamic'
import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import { RevenueOptions, RevenueSeries } from '../../data/Report/data'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const Revenuechart = () => {
    return (
        <Col xl='4'>
            <Card className="card">
                <CardHeader className="card-header">
                    <h5>Revenue</h5>
                </CardHeader>
                <CardBody className="card-body pt-0">
                    <div className="revenue-container">
                        <div id="revenuechart" />
                        <Chart options={RevenueOptions} series={RevenueSeries} type='donut' width={470} />
                    </div>
                </CardBody>
            </Card>
        </Col >
    )
}

export default Revenuechart