import dynamic from 'next/dynamic'
import React from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap'
import { IncomeOptions, Incomeseries } from '../../data/Report/data'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const IncomeChart = () => {
    return (
        <Card className="card">
            <CardHeader className="card-header pb-0">
                <h5>Income Analysis</h5>
            </CardHeader>
            <CardBody className="card-body income-wrap">
                <ul className="overview-content">
                    <li>
                        <div className="d-flex">
                            <div>
                                <p className="mb-0 light-font">Rent income</p>
                                <h4>$31415</h4>
                            </div>
                            <span><span className="label label-success">+30%</span></span>
                        </div>
                    </li>
                    <li>
                        <div className="d-flex">
                            <div>
                                <p className="mb-0 light-font">Sale income</p>
                                <h4>$78812</h4>
                            </div>
                            <span><span className="label label-success">+20%</span></span>
                        </div>
                    </li>
                </ul>
                <div className="income-container">
                    <div id="incomechart" />
                    <Chart options={IncomeOptions} series={Incomeseries} type='area' height={320} />
                </div>
            </CardBody>
        </Card>
    )
}

export default IncomeChart