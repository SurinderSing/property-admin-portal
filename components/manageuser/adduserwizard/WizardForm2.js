import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import { Button, Col, Row } from 'reactstrap';
import { ReactstrapInput } from '../../utils/ReactStarpInputsValidation';

const WizardForm2 = ({ setSteps, setData, data }) => {
    return (
        <Formik
            initialValues={{
                email: data.email || '',
                password: data.password || '',
                confirmPW: data.confirmPW || '',
                description: data.description || '',
                address: data.address || '',
                zip: data.zip || ''
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().required(),
                password: Yup.string().required(),
                confirmPW: Yup.string().when("password", {
                    is: (val) => (val && val.length > 0 ? true : false),
                    then: Yup.string().oneOf([Yup.ref("password")], "Both password need to be the same"),
                }).required("Required"),
                description: Yup.string().required(),
                address: Yup.string().required(),
                zip: Yup.string().min(5).max(6).required()
            })}
            onSubmit={(values) => {
                setData((pre) => ({ ...pre, ...values }))
                setSteps(3);
            }}
            render={() => (
                <div className='wizard-step-1 d-block'>
                    <Form id="needs-validation">
                        <Row>
                            <Col sm="4" className="form-group">
                                <Field name="email" id='email' type="email" component={ReactstrapInput} className="form-control" placeholder="Enter Your Email" label="Email Address" />
                            </Col>
                            <Col sm="4" className="form-group">
                                <Field name="password" id='password' type="text" component={ReactstrapInput} className="form-control" placeholder="Enter Your Password" label="Password" />
                            </Col>
                            <Col sm="4" className="form-group">
                                <Field name="confirmPW" type="text" id='confirmPW' component={ReactstrapInput} className="form-control" placeholder="Enter Your Password" label="Confirm Password" />
                            </Col>
                            <Col sm="12" className="form-group">
                                <Field type="textarea" id='textarea' name="description" component={ReactstrapInput} className="form-control" rows={4} label="Description" />
                            </Col>
                            <Col sm="6" className="form-group">
                                <Field type="text" name="address" id='address' component={ReactstrapInput} className="form-control" label="Address" placeholder="Enter Your Address" />
                            </Col>
                            <Col sm="6" className="form-group">
                                <Field type="text" name="zip" id='zip' component={ReactstrapInput} className="form-control" label="Zip code" placeholder="Enter Pin Code" />
                            </Col>
                            <Col sm='12' className='next-btn d-flex'>
                                <Button type='button' className="btn-dashed prev1 btn-pill" onClick={() => { setSteps(pre => pre - 1) }}><i className="fas fa-arrow-left me-2" /> Previous</Button>
                                <Button type='submit' className="btn-gradient next1 btn-pill">Next <i className="fas fa-arrow-right ms-2" /></Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            )}
        />
    )
}

export default WizardForm2