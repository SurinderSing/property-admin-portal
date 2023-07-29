import React from 'react'
import { Col, Container, Input, Label, Row } from 'reactstrap'
import Breadcrumb from '../../components/Common/Breadcrumb'
import Listview from '../../components/myproperties/PropertyList/Listview'

const Propertylist = () => {
  return (
    <>
      <Breadcrumb title='Property list' titleText='Welcome to admin panel' parent='My properties' />
      <Container fluid={true}>
        <Row>
          <Col lg='12'>
            <div className='property-admin'>
              <div className="property-section section-sm">
                <Row className='ratio_55 property-grid-2 property-map map-with-back'>
                  <Col className='col-12'>
                    <div className="filter-panel">
                      <div className="listing-option">
                        <h5 className="mb-0">Showing <span>1-15 of 69</span> Listings</h5>
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
                  <Listview />
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Propertylist