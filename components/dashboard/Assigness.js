import Link from 'next/link'
import React from 'react'
import { Media, Table } from 'reactstrap'
import { Assignessdata } from '../../data/dashboard/data'

const Assigness = () => {
    return (
        <div className="col-md-6">
            <div className="card">
                <div className="card-header">
                    <h5>Assignees</h5>
                </div>
                <div className="card-body assign-table pt-0">
                    <div className="table-responsive">
                        <Table className="table-bordernone">
                            <tbody>
                                {
                                    Assignessdata && Assignessdata.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>
                                                    <Media>
                                                        <img src={item.img} className="img-fluid" alt='' />
                                                        <Media body>
                                                            <Link href='/manage-users/profile'>
                                                                <h6>{item.name}</h6>
                                                            </Link>
                                                            <span>{item.text}</span>
                                                        </Media>
                                                    </Media>
                                                </td>
                                                <td>
                                                    <h6 className="font-danger">{item.open}</h6>
                                                    <span>Open</span>
                                                </td>
                                                <td>
                                                    <h6 className="font-warning">{item.escaleted}</h6>
                                                    <span>Escaleted</span>
                                                </td>
                                                <td>
                                                    <h6 className="font-success">{item.complete}</h6>
                                                    <span>Completed</span>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assigness