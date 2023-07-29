import Link from 'next/link'
import React from 'react'
import { Col, Row } from 'reactstrap'

const Breadcrumb = ({ title, parent, titleText }) => {
    return (
        <div className="container-fluid">
            <div className="page-header">
                <Row>
                    <Col sm='6'>
                        <div className="page-header-left">
                            <h3>{title}
                                <small>{titleText}</small>
                            </h3>
                        </div>
                    </Col>
                    <Col sm='6'>
                        <ol className="breadcrumb pull-right">
                            <li className="breadcrumb-item">
                                <Link href='/dashboard'>
                                    <i className="fa fa-home" />
                                </Link>
                            </li>
                            <li className="breadcrumb-item active">{parent}</li>
                        </ol>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Breadcrumb