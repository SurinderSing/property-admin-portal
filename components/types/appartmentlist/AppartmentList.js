import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import PropertyBox from '../../Common/Propertybox/PropertyBox';
import { getData } from '../../utils/getData';

const AppartmentList = () => {
    const [appartmentdata, setAppartmentdata] = useState();

    useEffect(() => {
        getData(`${process.env.API_URL}/property`)
            .then((response) => {
                setAppartmentdata(response.data?.Appartmentproperty)
            }).catch((error) => console.log('Error', error))
    }, [])

    return (
        <Col xl='12'>
            <Row className="property-2 row column-sm zoom-gallery property-label property-grid mt-0">
                {
                    appartmentdata && appartmentdata.map((value, index) => {
                        return (
                            <Col key={index} xl='4' md='6 xl-6'>
                                <PropertyBox data={value} />
                            </Col>
                        )
                    })
                }
                <nav className="theme-pagination">
                    <ul className="pagination">
                        <li className="page-item">
                            <a href="#" className="page-link" aria-label="Previous">
                                <span aria-hidden="true">«</span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>
                        <li className="page-item active"><a href="#" className="page-link">1</a></li>
                        <li className="page-item"><a href="#" className="page-link">2</a></li>
                        <li className="page-item"><a href="#" className="page-link">3</a></li>
                        <li className="page-item">
                            <a href="#" className="page-link" aria-label="Next">
                                <span aria-hidden="true">»</span>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </Row>

        </Col>
    )
}

export default AppartmentList