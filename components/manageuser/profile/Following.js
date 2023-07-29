import React from 'react'
import { Card, CardBody, Col, Media, Row } from 'reactstrap'
import { FollowingData } from '../../../data/manage-profile/profiledata'

const Following = () => {
    return (
        <Card>
            <CardBody>
                <div className="title-about">
                    <h5>Following</h5>
                </div>
                <ul>
                    {
                        FollowingData && FollowingData.map((item, i) => {
                            return (
                                <li key={i} className="w-100">
                                    <Media className='media'>
                                        <img src={item.img} className="img-fluid img-50" alt='' />
                                        <Media body className="media-body">
                                            <h6>{item.name}</h6>
                                            <span className="light-font">{item.email}</span>
                                        </Media>
                                        <div className={`status ${item.class}`} >{item.status}</div>
                                    </Media>
                                </li>
                            )
                        })
                    }
                </ul>
            </CardBody>
        </Card>
    )
}

export default Following