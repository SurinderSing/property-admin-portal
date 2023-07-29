import Link from 'next/link'
import React from 'react'
import { Card, CardBody } from 'reactstrap'
import { Friendsdata } from '../../../data/manage-profile/profiledata'

const Friends = () => {
    return (
        <Card>
            <CardBody>
                <div className="title-about">
                    <h5>Friends</h5>
                </div>
                <div className="friend-list">
                    <ul className="row">
                        {
                            Friendsdata && Friendsdata.map((item, i) => {
                                return (
                                    <li key={i} className="col-md-4 col-sm-3 col-4">
                                        <img src={item.img} className="img-fluid img-50" alt='' />
                                        <h6>{item.name}</h6>
                                        <Link href='/manage-users/add-user' className="label label-light-danger">
                                            Message
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </CardBody>
        </Card>
    )
}

export default Friends
