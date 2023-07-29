import React from 'react'
import { Download } from 'react-feather'
import { Card, CardBody, CardHeader, Col, Media, Table } from 'reactstrap'
import { managedata } from '../../data/Report/data'

const Management = () => {
    return (
        <Col xl='4'>
            <Card className="card">
                <CardHeader className="card-header pb-0">
                    <h5>Management Reports</h5>
                </CardHeader>
                <CardBody className="card-body management-table">
                    <div className="table-responsive">
                        <Table className="table table-bordernone">
                            <tbody>
                                {
                                    managedata && managedata.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>
                                                    <Media className="media">
                                                        <img src={item.img} className="img-fluid" alt='' />
                                                        <Media body className="media-body">
                                                            <h6>{item.report}</h6>
                                                            <span>{item.date}</span>
                                                        </Media>
                                                    </Media>
                                                </td>
                                                <td>
                                                    <a download href='#'><Download className="light-font" /></a>
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
        </Col>
    )
}

export default Management