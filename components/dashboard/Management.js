import React from 'react'
import { Download } from 'react-feather'
import { Card, CardBody, CardHeader, Col, Media, Table } from 'reactstrap'
import { Managementdata } from '../../data/dashboard/data'

const Management = () => {
    return (
        <Col xl='4 xl-6'>
            <Card>
                <CardHeader className="pb-0">
                    <h5>Management Reports</h5>
                </CardHeader>
                <CardBody className="management-table">
                    <div className="table-responsive">
                        <Table className="table-bordernone">
                            <tbody>
                                {
                                    Managementdata && Managementdata.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>
                                                    <Media>
                                                        <img src={item.img} className="img-fluid" alt='' />
                                                        <Media body>
                                                            <h6>{item.report}</h6>
                                                            <span>{item.date}</span>
                                                        </Media>
                                                    </Media>
                                                </td>
                                                <td>
                                                    <a download href='#'>
                                                        <Download className="light-font" />
                                                    </a>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </CardBody>
            </Card>
        </Col >
    )
}

export default Management