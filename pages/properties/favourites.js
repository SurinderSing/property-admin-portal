import React from 'react'
import { Col, Container, Input, Label, Row } from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import FavouriteProperties from '../../components/myproperties/favourites/FavouriteProperties'

const Favourites = () => {
    return (
        <>
            <Breadcrumb title='Favourites' titleText='Welcome To Admin Panel' parent='My Properties' />
            <Container fluid={true}>
                <Row>
                    <Col lg='12'>
                        <div className="property-admin mb-3">
                            <div className="property-section section-sm">
                                <Row className="ratio_55 property-grid-2 property-map map-with-back">
                                    <Col className="col-12">
                                        <div className="filter-panel">
                                            <div className="listing-option">
                                                <h5 className="mb-0">Showing <span>1-6 of 8</span> Listings</h5>
                                                <div>
                                                    <div className="d-flex">
                                                        <span className="m-r-10">Map view</span>
                                                        <Label className="switch">
                                                            <Input type="checkbox" className="option-list" name="step_1" defaultValue="ani1" defaultChecked /><span className="switch-state" />
                                                        </Label>
                                                        <span className="m-l-10">List view</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <FavouriteProperties />
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Favourites