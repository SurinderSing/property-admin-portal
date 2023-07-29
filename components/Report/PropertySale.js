import React from 'react'
import { MoreHorizontal } from 'react-feather'
import { Card, CardBody, CardHeader, Col, Media, Table } from 'reactstrap'
import { propertySaledata } from '../../data/Report/data'

const PropertySale = () => {
    return (
        <Col xl='8'>
            <Card className="card">
                <CardHeader className="card-header pb-0">
                    <h5>Property sales</h5>
                </CardHeader>
                <CardBody className="card-body report-table">
                    <div className="table-responsive recent-properties">
                        <Table className="table table-bordernone m-0">
                            <thead>
                                <tr>
                                    <th className="light-font">Property</th>
                                    <th className="light-font">Type</th>
                                    <th className="light-font">Date</th>
                                    <th className="light-font">Status</th>
                                    <th className="light-font">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    propertySaledata && propertySaledata.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>
                                                    <Media className="media">
                                                        <img src={`${item.img}`} className="img-fluid img-80" alt='' />
                                                        <Media body className="media-body">
                                                            <h6>{item.name}</h6>
                                                            <span className="light-font">{item.country}</span>
                                                        </Media>
                                                    </Media>
                                                </td>
                                                <td className="light-font">Sold</td>
                                                <td className="light-font">{item.date}</td>
                                                <td><span className="label label-light-danger">{item.status}</span></td>
                                                <td><MoreHorizontal className="light-font" /></td>
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

export default PropertySale