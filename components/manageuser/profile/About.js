import React from 'react'
import { Card, CardBody, Table } from 'reactstrap'

const About = ({ Aboutdata }) => {
    return (
        <Card>
            <CardBody>
                <div className="title-about">
                    <h5>About</h5>
                </div>
                <div className="table-responsive">
                    <Table className="table-bordernone mb-0">
                        <tbody>
                           
                            <tr>
                                <td className="pt-0">Email:</td>
                                <td className="light-font pt-0">{Aboutdata.email}</td>
                            </tr>
                            <tr>
                                <td>Mobile Number:</td>
                                <td className="light-font">{Aboutdata.mobile}</td>
                            </tr>
                            <tr>
                                <td>Gender:</td>
                                <td className="light-font">{Aboutdata.gender}</td>
                            </tr>
                            <tr>
                                <td className="pb-0">DOB:</td>
                                <td className="light-font pb-0">{Aboutdata.dob}</td>
                            </tr>
                            

                        </tbody>
                    </Table>
                </div>
            </CardBody>
        </Card>
    )
}

export default About