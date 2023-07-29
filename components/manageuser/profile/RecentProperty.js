import React from 'react'
import { Card, CardBody, Col, Media, Table } from 'reactstrap'
import { properylistdata } from '../../../data/manage-profile/profiledata'

const RecentProperty = () => {
    return (
        <div className="recent-properties">
            <Card>
                <CardBody>
                    <div className="title-about">
                        <h5>Recent properties</h5>
                    </div>
                    <div className="table-responsive">
                        <Table className="table-bordernone mb-0">
                            <thead>
                                <tr>
                                    <th>Property</th>
                                    <th>Rate</th>
                                    <th>Deposit</th>
                                    <th>Start date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    properylistdata && properylistdata.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>
                                                    <Media>
                                                        <img src={item.img} className="img-fluid img-80" alt='' />
                                                        <Media body>
                                                            <h6>{item.name}</h6>
                                                            <span className="light-font">{item.country}</span>
                                                        </Media>
                                                    </Media>
                                                </td>
                                                <td>
                                                    <h6>{item.rent}</h6>
                                                    <span className="light-font">monthly rent</span>
                                                </td>
                                                <td>
                                                    <h6>{item.deposit}</h6>
                                                    <span className="light-font">deposit</span>
                                                </td>
                                                <td>
                                                    <h6>{item.date}</h6>
                                                    <span className="light-font">start date</span>
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
        </div>
    )
}

export default RecentProperty