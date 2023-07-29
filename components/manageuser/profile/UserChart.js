
import dynamic from 'next/dynamic'
import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { Useroptions, userseries } from '../../../data/manage-profile/profiledata'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const UserChart = () => {
    return (
        <Card>
            <CardBody>
                <div className="title-about">
                    <h5>Total users</h5>
                </div>
                <div className="total-container">
                    <div id="userchart" />
                    <Chart options={Useroptions} series={userseries} type='donut' width={320} />
                </div>
            </CardBody>
        </Card>
    )
}

export default UserChart