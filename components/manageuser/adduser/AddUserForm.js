import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button, Col, Row } from "reactstrap";
import {
  ReactstrapInput,
  ReactstrapSelect,
} from "../../utils/ReactStarpInputsValidation";
import Request from "../../../request";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const AddUserForm = () => {
  const router = useRouter();
  //   const getUploadParams = () => {
  //     return { url: "https://httpbin.org/post" };
  //   };

  const addDealer = async (agentDetails) => {
    const { success, message } = await Request.addDealerApi(agentDetails);
    if (success) {
      router.push("/agents/all-agents");
      return toast.success(message || "Added dealer successfully!");
    }
    return toast.error(message || "Oops! Something went wrong.");
  };

  return (
    <Formik
      initialValues={{
        first_name: "",
        last_name: "",
        gender: "",
        mobile: "",
        dob: "",
        email: "",
        password: "",
        password_confirm: "",
        description: "",
        address: "",
        zipcode: "",
      }}
      validationSchema={Yup.object().shape({
        first_name: Yup.string().required(),
        last_name: Yup.string().required(),
        gender: Yup.string().required(),
        mobile: Yup.string().required(),
        dob: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required(),
        password_confirm: Yup.string().required(),
        description: Yup.string().required(),
        address: Yup.string().required(),
        zipcode: Yup.string().min(6).max(6).required(),
      })}
      onSubmit={(values) => {
        addDealer(values);
      }}
      render={() => (
        <Form>
          <Row className="gx-3">
            <Col sm="4" className="form-group">
              <Field
                name="first_name"
                type="text"
                component={ReactstrapInput}
                className="form-control"
                placeholder="Enter Your Name"
                label="First Name"
              />
            </Col>
            <Col sm="4" className="form-group">
              <Field
                name="last_name"
                type="text"
                component={ReactstrapInput}
                className="form-control"
                placeholder="Enter Your Surname"
                label="Last Name"
              />
            </Col>
            <Col sm="4" className="form-group">
              <Field
                name="gender"
                component={ReactstrapSelect}
                className="form-control"
                label="Gender"
                inputprops={{
                  options: ["Male", "Female", "Others"],
                  defaultOption: "Gender",
                }}
              />
            </Col>
            <Col sm="4" className="form-group">
              <Field
                name="mobile"
                component={ReactstrapInput}
                type="tel"
                className="form-control"
                placeholder="Enter Your Mobile Number"
                label="Phone number"
              />
            </Col>
            <Col sm="4" className="form-group">
              <Field
                name="dob"
                component={ReactstrapInput}
                type="date"
                className="form-control"
                label="Date of birth"
              />
            </Col>
            <Col sm="4" className="form-group">
              <Field
                name="email"
                type="email"
                component={ReactstrapInput}
                className="form-control"
                placeholder="Enter Your Email"
                label="Email Address"
              />
            </Col>
            <Col sm="6" className="form-group">
              <Field
                name="password"
                type="text"
                component={ReactstrapInput}
                className="form-control"
                placeholder="Enter Your Password"
                label="Password"
              />
            </Col>
            <Col sm="6" className="form-group">
              <Field
                name="password_confirm"
                type="text"
                component={ReactstrapInput}
                className="form-control"
                placeholder="Enter Your Password"
                label="Confirm Password"
              />
            </Col>
            <Col sm="12" className="form-group">
              <Field
                type="textarea"
                name="description"
                component={ReactstrapInput}
                className="form-control"
                rows={4}
                label="Description"
              />
            </Col>
            <Col sm="6" className="form-group">
              <Field
                type="text"
                name="address"
                component={ReactstrapInput}
                className="form-control"
                label="Address"
                placeholder="Enter Your Address"
              />
            </Col>
            <Col sm="6" className="form-group">
              <Field
                type="text"
                name="zipcode"
                component={ReactstrapInput}
                className="form-control"
                label="Zip code"
                placeholder="Enter Pin Code"
              />
            </Col>
          </Row>
          <div className="dropzone-admin mb-0">
            {/* <h6>Media</h6>
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
                        </div> */}
            <Col sm="12" className="form-btn">
              <Button type="submit" className="btn btn-gradient btn-pill">
                Submit
              </Button>
              <Button className="btn btn-dashed btn-pill">Cancel</Button>
            </Col>
          </div>
        </Form>
      )}
    />
  );
};

export default AddUserForm;
