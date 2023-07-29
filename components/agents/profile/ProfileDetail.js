import Link from 'next/link'
import React from 'react'
import { Button, Card, CardBody, Col, Media } from 'reactstrap'

const ProfileDetail = () => {
    return (
        <Col xl='5 xl-6'>
            <Card>
                <CardBody>
                    <Media className="contact-media">
                        <img src="/assets/images/avatar/5.jpg" className="img-fluid img-80" alt='' />
                        <Media body>
                            <h4>Good Evening , Zack Lee</h4>
                            <span className="light-font">My current address <a href='#' className='font-theme'>Mina Road, Dubai, United Arab Emirates</a></span>
                            <ul className="agent-social mt-2">
                                <li><Link href="https://www.facebook.com/" className="facebook"><i className="fab fa-facebook-f" /></Link></li>
                                <li><Link href="https://twitter.com/" className="twitter"><i className="fab fa-twitter" /></Link></li>
                                <li><Link href="https://account.google.com" className="google"><i className="fab fa-google" /></Link></li>
                                <li><Link href="https://www.linkedin.com/" className="linkedin"><i className="fab fa-linkedin-in" /></Link></li>
                            </ul>
                        </Media>
                    </Media>
                    <div className="all-properties mt-3">
                        <ul className="light-box user-info-icon">
                            <li>
                                <Media>
                                    <img src="/assets/images/svg/1.jpg" className="img-fluid" alt='' />
                                    <Media body>
                                        <h5>18</h5>
                                        <span className="light-font">Sold</span>
                                    </Media>
                                </Media>
                            </li>
                            <li>
                                <Media>
                                    <img src="/assets/images/svg/icon/3.png" className="img-fluid" alt='' />
                                    <Media body>
                                        <h5>20</h5>
                                        <span className="light-font">Waiting</span>
                                    </Media>
                                </Media>
                            </li>
                            <li>
                                <Media>
                                    <img src="/assets/images/svg/icon/2.png" className="img-fluid" alt='' />
                                    <Media body>
                                        <h5>40</h5>
                                        <span className="light-font">Rent</span>
                                    </Media>
                                </Media>
                            </li>
                        </ul>
                    </div>
                    <div className="contact-btn">
                        <Link href='/manage-users/allusers' className="btn btn-gradient btn-pill">Email</Link>
                        <Link href='/manage-users/add-user' className="btn btn-dashed ms-2 btn-pill">Message</Link>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default ProfileDetail