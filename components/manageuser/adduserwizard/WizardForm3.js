import { Form, Formik } from 'formik';
import React from 'react'
import Dropzone from 'react-dropzone-uploader';
import { toast } from 'react-toastify';
import { Button, Col, Row } from 'reactstrap';
import Swal from 'sweetalert2';

const WizardForm3 = ({ setSteps, setData }) => {
    const notify = () => toast("Your form details submitted successfully.", { type: "success", position: "top-right" });
    const getUploadParams = () => {
        return { url: 'https://httpbin.org/post' }
    }
    return (
        <Formik
            initialValues={{
            }}
            onSubmit={() => {
                Swal.fire({
                    title: 'Are you sure you want to submit the form?',
                    text: "please check account details",
                    icon: 'success',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'submit'
                }).then((result) => {
                    if (result.isConfirmed) {
                        notify();
                        setSteps(1);
                        setData({});
                    }
                })
            }}
            render={() => (
                <div className='wizard-step-1 d-block'>
                    <Form id="needs-validation">
                        <Row>
                            <div className="dropzone-admin mb-0">
                                <h6>Media</h6>
                                <div className="dropzone form" id="multiFileUpload">
                                    <div className="dz-message needsclick">
                                        <i className="fas fa-cloud-upload-alt" />
                                        <Dropzone
                                            getUploadParams={getUploadParams}
                                            maxFiles={1}
                                            multiple={false}
                                            canCancel={false}
                                            inputContent="Drop A File"
                                            accept="image/*,audio/*,video/*"
                                            styles={{
                                                dropzoneActive: { borderColor: "green" },
                                            }}
                                        >
                                            <h6>Drop files here or click to upload.</h6>
                                            <span className="note needsclick">
                                                (This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)
                                            </span>
                                        </Dropzone>
                                    </div>
                                </div>
                            </div>
                            <Col sm='12' className='next-btn d-flex'>
                                <Button className="btn-dashed prev1 btn-pill" onClick={() => { setSteps(pre => pre - 1) }}><i className="fas fa-arrow-left me-2" /> Previous</Button>
                                <Button type='submit' className="btn-gradient next1 btn-pill">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            )}
        />
    )
}

export default WizardForm3