import dynamic from 'next/dynamic'
import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { Erningseries, ErningsOption } from '../../../data/manage-profile/profiledata'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const RecentChart = () => {
    return (
        <Card className="earning-chart">
            <CardBody>
                <div className="title-about">
                    <h5>Recent earnings</h5>
                </div>
                <Chart options={ErningsOption} series={Erningseries} type='bar' height={150} />
            </CardBody>
        </Card>
    )
}

export default RecentChart