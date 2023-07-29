import React from 'react'
import { Field, Form, Formik } from 'formik';
import Dropzone from 'react-dropzone-uploader';
import { Button, Col, Label, Row } from 'reactstrap';
import * as Yup from 'yup';
import { ReactstrapInput, ReactstrapSelect } from '../../utils/ReactStarpInputsValidation';

const EditPropertyForm = () => {
    const getUploadParams = () => {
        return { url: 'https://httpbin.org/post' }
    }
    return (
        <Formik
            initialValues={{
                propertyType: "",
                propertyStatus: "",
                propertyPrice: "",
                password: "",
                maxRooms: "",
                beds: "",
                baths: "",
                area: "",
                price: "",
                agencies: "",
                description: "",
                address: "",
                zip: "",
                anyCountry: "",
                anyCity: "",
                landmark: "",
                mp4Link: "",
                checkBoxes: [],
            }}
            validationSchema={Yup.object().shape({
                propertyType: Yup.string().required(),
                propertyStatus: Yup.string().required(),
                propertyPrice: Yup.number().required(),
                maxRooms: Yup.string().required(),
                beds: Yup.string().required(),
                baths: Yup.string().required(),
                area: Yup.string().required(),
                price: Yup.number().required(),
                agencies: Yup.string().required(),
                description: Yup.string().required(),
                address: Yup.string().required(),
                zip: Yup.string().min(6).max(6).required(),
                anyCountry: Yup.string().required(),
                anyCity: Yup.string().required(),
                landmark: Yup.string().required(),
            })}
            onSubmit={(values) => {
                alert("Your data is submitted check console");
            }}
            render={() => (
                <Form>
                    <Row className="gx-3">
                        <Col sm="4" className="form-group">
                            <Field name="propertyType" type="text" component={ReactstrapInput} className="form-control" placeholder="villa" label="Property Type" />
                        </Col>
                        <Col sm='4' className="form-group">
                            <Field name="propertyStatus" component={ReactstrapSelect} className="form-control" label="Property Status"
                                inputprops={{ options: ["For Rent", "For sale"], defaultOption: "Property Status" }}
                            />
                        </Col>
                        <Col sm="4" className="form-group">
                            <Field name="propertyPrice" type="text" className="form-control" component={ReactstrapInput} label="Property Price" placeholder="$3000" />
                        </Col>
                        <Col sm="4" className="form-group">
                            <Field name="maxRooms" component={ReactstrapSelect} className="form-control" label="Max Rooms"
                                inputprops={{ options: ["1", "2", "3", "4", "5", "6"], defaultOption: "Max Rooms" }}
                            />
                        </Col>
                        <Col sm="4" className="form-group">
                            <Field name="beds" component={ReactstrapSelect} className="form-control" label="Beds"
                                inputprops={{ options: ["1", "2", "3", "4", "5", "6"], defaultOption: "Beds" }}
                            />
                        </Col>
                        <Col sm="4" className="form-group">
                            <Field name="baths" component={ReactstrapSelect} className="form-control" label="Baths"
                                inputprops={{ options: ["1", "2", "3", "4", "5", "6"], defaultOption: "Baths" }}
                            />
                        </Col>
                        <Col sm="4" className="form-group">
                            <Field name="area" type="text" className="form-control" component={ReactstrapInput} label="Area" placeholder="85 Sq Ft" />
                        </Col>
                        <Col sm="4" className="form-group">
                            <Field name="price" type="text" className="form-control" component={ReactstrapInput} label="Price" placeholder="$3000" />
                        </Col>
                        <Col sm="4" className="form-group">
                            <Field name="agencies" component={ReactstrapSelect} className="form-control" label="Agencies"
                                inputprops={{ options: ["1", "2", "3", "4", "5", "6"], defaultOption: "Agencies" }} />
                        </Col>
                        <Col sm="12" className="form-group">
                            <Field type="textarea" name="description" component={ReactstrapInput} className="form-control" rows={4} label="Description" />
                        </Col>
                    </Row>
                    <div className="form-inputs">
                        <Row className=" gx-3">
                            <Col sm="6" className="form-group">
                                <Field type="text" name="address" component={ReactstrapInput} className="form-control" label="Address" placeholder="Address of your property" />
                            </Col>
                            <Col sm="6" className="form-group">
                                <Field type="text" name="zip" component={ReactstrapInput} className="form-control" label="Zip code" placeholder="39702" />
                            </Col>
                            <Col sm="4" className="form-group">
                                <Field name="anyCountry" component={ReactstrapSelect} className="form-control" label="Any country"
                                    inputprops={{ options: ["1", "2", "3", "4", "5", "6"], defaultOption: "Any country" }}
                                />
                            </Col>
                            <Col sm="4" className="form-group">
                                <Field name="anyCity" component={ReactstrapSelect} className="form-control" label="Any City"
                                    inputprops={{ options: ["1", "2", "3", "4", "5", "6"], defaultOption: "Any City" }}
                                />
                            </Col>
                            <Col sm="4" className="form-group">
                                <Field name="landmark" type="text" component={ReactstrapInput} className="form-control" placeholder="landmark place name" label="Landmark" />
                            </Col>
                        </Row>
                    </div>
                    <div className="dropzone-admin form-inputs">
                        <label>Media</label>
                        <div className="dropzone" id="multiFileUpload">
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
                                />
                                <h6>Drop files here or click to upload.</h6>
                                <span className="note needsclick">
                                    (This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)
                                </span>
                            </div>
                        </div>
                        <Row className="gx-3">
                            <Col sm="12" className="form-group">
                                <Field name="mp4Link" component={ReactstrapInput} type="text" className="form-control" placeholder="mp4 video link" label="Video (mp4)" />
                            </Col>
                            <Col sm="12" className="form-group mb-0">
                                <label>Additional features</label>
                                <div className="additional-checkbox">
                                    <Label htmlFor="chk-ani">
                                        <Field name="checkBoxes" value="Emergency Exit" className="checkbox_animated" id="chk-ani" type="checkbox" /> Emergency Exit
                                    </Label>
                                    <Label htmlFor="chk-ani1">
                                        <Field name="checkBoxes" value="CCTV" className="checkbox_animated" id="chk-ani1" type="checkbox" /> CCTV
                                    </Label>
                                    <Label htmlFor="chk-ani2">
                                        <Field name="checkBoxes" value="Free Wi-Fi" className="checkbox_animated" id="chk-ani2" type="checkbox" /> Free Wi-Fi
                                    </Label>
                                    <Label htmlFor="chk-ani3">
                                        <Field name="checkBoxes In The Area" value="Free Parking In The Area" className="checkbox_animated" id="chk-ani3" type="checkbox" /> Free Parking In The Area
                                    </Label>
                                    <Label htmlFor="chk-ani4">
                                        <Field name="checkBoxes" value="Air Conditioning" className="checkbox_animated" id="chk-ani4" type="checkbox" /> Air Conditioning
                                    </Label>
                                    <Label htmlFor="chk-ani5">
                                        <Field name="checkBoxes" value="Air Conditioning" className="checkbox_animated" id="chk-ani5" type="checkbox" /> Security Guard
                                    </Label>
                                    <Label htmlFor="chk-ani6">
                                        <Field name="checkBoxes" value="Air Conditioning" className="checkbox_animated" id="chk-ani6" type="checkbox" /> Terrance
                                    </Label>
                                    <Label htmlFor="chk-ani7">
                                        <Field name="checkBoxes" value="Air Conditioning" className="checkbox_animated" id="chk-ani7" type="checkbox" /> Laundry Service
                                    </Label>
                                    <Label htmlFor="chk-ani8">
                                        <Field name="checkBoxes" value="Air Conditioning" className="checkbox_animated" id="chk-ani8" type="checkbox" /> Elevator Lift
                                    </Label>
                                    <Label htmlFor="chk-ani9">
                                        <Field name="checkBoxes" value="Air Conditioning" className="checkbox_animated" id="chk-ani9" type="checkbox" /> Balcony
                                    </Label>
                                </div>
                            </Col>
                            <Col sm='12' className="form-btn">
                                <Button type="submit" className="btn btn-gradient btn-pill">Submit</Button>
                                <Button type="submit" className="btn btn-dashed btn-pill">Cancel</Button>
                            </Col>
                        </Row>
                    </div>
                </Form>
            )
            }
        />
    )
}

export default EditPropertyForm