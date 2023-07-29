import React, { useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import PropertyBox from '../../Common/Propertybox/PropertyBox';
import { getData } from '../../utils/getData';

const CondominiumList = () => {
    const [Condominiumdata, setCondominiumdata] = useState();

    useEffect(() => {
        getData(`${process.env.API_URL}/property`)
            .then((resp) => {
                setCondominiumdata(resp.data?.CondominiumProperty)
            }).catch((error) => console.log('Error', error))
    }, [])

    return (
        <Row className="property-2 row column-sm zoom-gallery property-label property-grid mt-0">
            {
                Condominiumdata && Condominiumdata.map((value, index) => {
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
    )
}

export default CondominiumList