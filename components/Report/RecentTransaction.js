import React from 'react'
import { MoreHorizontal } from 'react-feather'
import { Card, CardBody, CardHeader, Col, Media, Table } from 'reactstrap'
import { TransactionData } from '../../data/Report/data'

const RecentTransaction = () => {
    return (
        <Col sm='12'>
            <Card className="card">
                <CardHeader className="card-header pb-0">
                    <h5>Recent transactions</h5>
                </CardHeader>
                <CardBody className="card-body report-table">
                    <div className="table-responsive transactions-table">
                        <Table className="table table-bordernone m-0">
                            <thead>
                                <tr>
                                    <th className="light-font">#</th>
                                    <th className="light-font">Property</th>
                                    <th className="light-font">Type</th>
                                    <th className="light-font">Amount</th>
                                    <th className="light-font">Price</th>
                                    <th className="light-font">Date</th>
                                    <th className="light-font">Status</th>
                                    <th className="light-font">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    TransactionData && TransactionData.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{item.id}</td>
                                                <td>
                                                    <Media className="media">
                                                        <img src={item.img} className="img-fluid img-80" alt='' />
                                                        <Media body className="media-body">
                                                            <h6>{item.name}</h6>
                                                            <span className="light-font">{item.country}</span>
                                                        </Media>
                                                    </Media>
                                                </td>
                                                <td>{item.type}</td>
                                                <td>{item.amount}</td>
                                                <td>{item.Price}</td>
                                                <td>{item.date}</td>
                                                <td><span className={`label ${item.status === 'Pending' ? 'badge-light-danger' : 'badge-light-success'}`}>{item.status}</span></td>
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

export default RecentTransaction