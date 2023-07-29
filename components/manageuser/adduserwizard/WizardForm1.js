import { Field, Form, Formik } from 'formik'
import React from 'react'
import { Button, Col, Row } from 'reactstrap';
import * as Yup from 'yup';
import { ReactstrapInput, ReactstrapSelect } from '../../utils/ReactStarpInputsValidation';

const WizardForm1 = ({ setSteps, setData, data }) => {
    return (
        <Formik
            initialValues={{
                firstname: data.firstname || '',
                lastname: data.lastname || '',
                gender: data.gender || '',
                phone: data.phone || '',
                dob: data.dob || '',
            }}
            validationSchema={Yup.object().shape({
                firstname: Yup.string().required(),
                lastname: Yup.string().required(),
                gender: Yup.string().required(),
                phone: Yup.number().required(),
                dob: Yup.string().required(),
            })}
            onSubmit={(values) => {
                setData(values);
                setSteps(2);
            }}
            render={() => (
                <div className='wizard-step-1 d-block'>
                    <Form id="needs-validation">
                        <Row>
                            <Col sm="4" className="form-group">
                                <Field name="firstname" type="text" id='firstname' component={ReactstrapInput} className="form-control" placeholder="Enter Your Name" label="First Name" />
                            </Col>
                            <Col sm='4' className="form-group">
                                <Field name="lastname" type="text" id='lastname' component={ReactstrapInput} className="form-control" placeholder="Enter Your Surname" label="Last Name" />
                            </Col>
                            <Col sm="4" className="form-group">
                                <Field name="gender" id='gender' component={ReactstrapSelect} className="form-control" label="Gender"
                                    inputprops={{ options: ["Male", "Female"], defaultOption: "Gender" }}
                                />
                            </Col>
                            <Col sm="6" className="form-group">
                                <Field name="phone" id='phone' component={ReactstrapInput} type='number' className="form-control" placeholder='Enter Your Mobile Number' label="Phone number" />
                            </Col>
                            <Col sm="6" className="form-group">
                                <Field name="dob" id='dob' component={ReactstrapInput} type='date' className="form-control" label="Date of birth" />
                            </Col>
                            <Col sm='12' className='next-btn text-end'>
                                <Button type='submit' className="btn-gradient next1 btn-pill">Next <i className="fas fa-arrow-right ms-2" /></Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            )}
        />
    )
}

export default WizardForm1