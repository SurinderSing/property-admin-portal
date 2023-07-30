import { Field, Form, Formik } from "formik";
import React from "react";
import Dropzone from "react-dropzone-uploader";
import { Button, Col, Row } from "reactstrap";
import * as Yup from "yup";
import {
  ReactstrapInput,
  ReactstrapSelect,
} from "../../utils/ReactStarpInputsValidation";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Request from "../../../request";

const EditUserdataForm = ({ DataSource }) => {
  const router = useRouter();
  // const getUploadParams = () => {
  //     return { url: 'https://httpbin.org/post' }
  // }

  console.log(DataSource);

  const updateDealer = async (agentDetails) => {
    const { success, message } = await Request.updateDealerApi(
      DataSource.user,
      agentDetails
    );
    if (success) {
      router.push("/agents/all-agents");
      return toast.success(message || "Added dealer successfully!");
    }
    return toast.error(message || "Oops! Something went wrong.");
  };

  return (
    DataSource.user && (
      <Formik
        initialValues={{
          first_name: DataSource.first_name,
          last_name: DataSource.last_name,
          gender: DataSource.gender,
          mobile: DataSource.mobile,
          dob: DataSource.dob,
          email: DataSource.email,
          password: "",
          password_confirm: "",
          description: DataSource.description,
          address: DataSource.address,
          zipcode: DataSource.zipcode,
        }}
        validationSchema={Yup.object().shape({
          first_name: Yup.string(),
          last_name: Yup.string(),
          gender: Yup.string(),
          mobile: Yup.string(),
          dob: Yup.string(),
          email: Yup.string(),
          password: Yup.string(),
          password_confirm: Yup.string(),
          description: Yup.string(),
          address: Yup.string(),
          zipcode: Yup.string().min(6).max(6),
        })}
        onSubmit={(values) => {
          updateDealer(values);
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
                    options: ["Male", "Female"],
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
              <label className="label-color form-label">Media</label>
              {/* <div className="dropzone form" id="multiFileUpload">
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
                    (This is just a demo dropzone. Selected files are{" "}
                    <strong>not</strong> actually uploaded.)
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
    )
  );
};

export default EditUserdataForm;
