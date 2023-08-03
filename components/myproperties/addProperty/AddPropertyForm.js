import { Field, Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import Dropzone from "react-dropzone-uploader";
import { Button, Col, Label, Row } from "reactstrap";
import * as Yup from "yup";
import {
  ReactstrapInput,
  ReactstrapSelect,
} from "../../utils/ReactStarpInputsValidation";
import { toast } from "react-toastify";
import Request from "../../../request";
import { useRouter } from "next/router";

const AddPropertyForm = () => {
  const router = useRouter();
  const [AgentsArr, setAgentsArr] = useState([]);
  let files = [];
  useEffect(() => {
    getAgentsListing();
  }, []);

  const getAgentsListing = async () => {
    const { data, success } = await Request.allDealerApi();
    if (success) {
      let agents = data.map((agent) => {
        return {
          id: agent.user,
          name: agent.first_name + " " + agent.last_name,
        };
      });
      setAgentsArr(agents);
    }
  };

  const createPropertyForm = async (propetyDetails) => {
    console.log(propetyDetails);
    const formData = new FormData();
    // Append each image file to the FormData object
    propetyDetails.photoUrl.forEach((file, index) => {
      formData.append(`photoUrl${index + 1}`, file);
    });

    // Append other fields
    Object.keys(propetyDetails).forEach((key) => {
      if (key !== "photoUrl") {
        formData.append(key, propetyDetails[key]);
      }
    });

    const { data, success, message } = await Request.createProperty(formData);

    if (success) {
      router.push("/myproperties/propertylist");
      return toast.success(message || "Porperty created successfully");
    }
    return toast.error(message || "Oops! Something went wrong!");
  };

  return (
    <Formik
      initialValues={{
        property_type: "",
        property_mode: "",
        status: "",
        price: "",
        num_of_rooms: "",
        num_of_bathrooms: "",
        num_of_bedrooms: "",
        area: "",
        emergencyexit: false,
        cctv: false,
        freewifi: false,
        freeparcking: false,
        airconiditioning: false,
        securityguard: false,
        terrace: false,
        laundryservice: false,
        balcony: false,
        latest_for_sale: false,
        latest_property: false,
        // opeing_since: "",
        // rating: "",
        address: "",
        zipcode: "",
        city: "",
        country: "",
        landmark: "",
        photoUrl: [],
        videoUrl: null,
        agent: 4,
      }}
      validationSchema={Yup.object().shape({
        property_type: Yup.string().required(),
        property_mode: Yup.string().required(),
        status: Yup.string().required(),
        price: Yup.number().required(),
        num_of_rooms: Yup.string().required(),
        num_of_bedrooms: Yup.string().required(),
        num_of_bathrooms: Yup.string().required(),
        area: Yup.string().required(),
        agent: Yup.string().required(),
        description: Yup.string().required(),
        address: Yup.string().required(),
        zipcode: Yup.string().min(6).max(6).required(),
        country: Yup.string().required(),
        city: Yup.string().required(),
        landmark: Yup.string().required(),
        // photoUrl: Yup.string().required(),
      })}
      onSubmit={(values) => {
        createPropertyForm(values);
      }}
      render={({ setFieldValue, values }) => (
        <Form>
          <Row className="gx-3">
            <Col sm="4" className="form-group">
              <Field
                name="property_type"
                component={ReactstrapSelect}
                className="form-control"
                placeholder="affordable"
                label="Property Type"
                inputprops={{
                  options: [
                    { name: "Affordable", id: "Affordable" },
                    { name: "Re Sale", id: "Re Sale" },
                    { name: "Luxury", id: "Luxury" },
                    { name: "Commercial", id: "Commercial" },
                    { name: "Residence", id: "Residence" },
                  ],
                  defaultOption: "Property Type",
                }}
              />
            </Col>
            <Col sm="4" className="form-group">
              <Field
                name="status"
                component={ReactstrapSelect}
                className="form-control"
                label="Property Status"
                inputprops={{
                  options: [
                    { name: "On Going", id: "On Going" },
                    { name: "Ready to Move", id: "Ready to Move" },
                  ],
                  defaultOption: "Property Status",
                }}
              />
            </Col>
            <Col sm="4" className="form-group">
              <Field
                name="property_mode"
                component={ReactstrapSelect}
                className="form-control"
                label="Property Mode"
                inputprops={{
                  options: [
                    { id: "New Launched", name: "New Launched" },
                    {
                      id: "Under Construction",
                      name: "Under Construction",
                    },
                    { id: "Launched", name: "Launched" },
                  ],
                  defaultOption: "Property Mode",
                }}
              />
            </Col>
            <Col sm="4" className="form-group">
              <Field
                name="price"
                type="text"
                className="form-control"
                component={ReactstrapInput}
                label="Property Price"
                placeholder="$2800"
              />
            </Col>
            <Col sm="4" className="form-group">
              <Field
                name="num_of_rooms"
                component={ReactstrapSelect}
                className="form-control"
                label="Max Rooms"
                inputprops={{
                  options: ["1", "2", "3", "4", "5", "6"],
                  defaultOption: "Max Rooms",
                }}
              />
            </Col>
            <Col sm="4" className="form-group">
              <Field
                name="num_of_bedrooms"
                component={ReactstrapSelect}
                className="form-control"
                label="Beds"
                inputprops={{
                  options: ["1", "2", "3", "4", "5", "6"],
                  defaultOption: "Beds",
                }}
              />
            </Col>
            <Col sm="4" className="form-group">
              <Field
                name="num_of_bathrooms"
                component={ReactstrapSelect}
                className="form-control"
                label="Baths"
                inputprops={{
                  options: ["1", "2", "3", "4", "5", "6"],
                  defaultOption: "Baths",
                }}
              />
            </Col>
            <Col sm="4" className="form-group">
              <Field
                name="area"
                type="text"
                className="form-control"
                component={ReactstrapInput}
                label="Area"
                placeholder="85 Sq Ft"
              />
            </Col>
            <Col sm="4" className="form-group">
              <div>
                <Field
                  name="agent"
                  component={ReactstrapSelect}
                  className="form-control"
                  label="Agent"
                  inputprops={{
                    options: AgentsArr,
                    defaultOption: "Agent",
                  }}
                />
              </div>
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
          </Row>
          <div className="form-inputs">
            <h6>Address</h6>
            <Row className=" gx-3">
              <Col sm="6" className="form-group">
                <Field
                  type="text"
                  name="address"
                  component={ReactstrapInput}
                  className="form-control"
                  label="Address"
                  placeholder="Address of your property"
                />
              </Col>
              <Col sm="6" className="form-group">
                <Field
                  type="text"
                  name="zipcode"
                  component={ReactstrapInput}
                  className="form-control"
                  label="Zip code"
                  placeholder="39702"
                />
              </Col>
              <Col sm="4" className="form-group">
                <Field
                  name="country"
                  type="text"
                  component={ReactstrapInput}
                  className="form-control"
                  label="Country"
                />
              </Col>
              <Col sm="4" className="form-group">
                <Field
                  name="city"
                  type="text"
                  component={ReactstrapInput}
                  className="form-control"
                  label="Any City"
                />
              </Col>
              <Col sm="4" className="form-group">
                <Field
                  name="landmark"
                  type="text"
                  component={ReactstrapInput}
                  className="form-control"
                  placeholder="landmark place name"
                  label="Landmark"
                />
              </Col>
            </Row>
          </div>
          <div className="dropzone-admin form-inputs">
            <h6>Media</h6>
            <div className="dropzone" id="multiFileUpload">
              <div className="dz-message needsclick">
                <i className="fas fa-cloud-upload-alt" />
                <label>Images</label>
                <Dropzone
                  inputContent="Drop Images"
                  onChangeStatus={({ file }, status) => {
                    if (status === "done") {
                      files = [...files, file];
                      setFieldValue("photoUrl", files);
                    }
                    if (status === "removed") {
                      const updatedPhotoUrl = values.photoUrl.filter(
                        (value) => {
                          return value.name !== file.name;
                        }
                      );
                      setFieldValue("photoUrl", updatedPhotoUrl);
                    }
                  }}
                  maxFiles={6}
                  multiple={true}
                  canCancel={false}
                  canRemove={true}
                  accept="image/*"
                  styles={{
                    dropzoneActive: { borderColor: "green" },
                  }}
                />
                <label>Video</label>
                <Dropzone
                  inputContent="Drop A File"
                  onChangeStatus={({ file }, status) => {
                    if (status === "done") {
                      setFieldValue("videoUrl", file);
                    }
                    if (status === "removed") {
                      setFieldValue("videoUrl", null);
                    }
                  }}
                  maxFiles={1}
                  multiple={false}
                  canCancel={false}
                  accept="video/*"
                  styles={{
                    dropzoneActive: { borderColor: "green" },
                  }}
                />
              </div>
            </div>
            <Row className="gx-3">
              {/* <Col sm="12" className="form-group">
                <Field
                  name="mp4Link"
                  component={ReactstrapInput}
                  type="text"
                  className="form-control"
                  placeholder="mp4 video link"
                  label="Video (mp4)"
                />
              </Col> */}
              <Col sm="12" className="form-group mb-0">
                <label>Additional features</label>
                <div className="additional-checkbox">
                  <Label htmlFor="chk-ani">
                    <Field
                      name="emergencyexit"
                      className="checkbox_animated"
                      id="chk-ani"
                      type="checkbox"
                    />
                    Emergency Exit
                  </Label>
                  <Label htmlFor="chk-ani1">
                    <Field
                      name="cctv"
                      className="checkbox_animated"
                      id="chk-ani1"
                      type="checkbox"
                    />{" "}
                    CCTV
                  </Label>
                  <Label htmlFor="chk-ani2">
                    <Field
                      name="freewifi"
                      className="checkbox_animated"
                      id="chk-ani2"
                      type="checkbox"
                    />{" "}
                    Free Wi-Fi
                  </Label>
                  <Label htmlFor="chk-ani3">
                    <Field
                      name="freeparcking"
                      className="checkbox_animated"
                      id="chk-ani3"
                      type="checkbox"
                    />{" "}
                    Free Parking In The Area
                  </Label>
                  <Label htmlFor="chk-ani4">
                    <Field
                      name="airconiditioning"
                      className="checkbox_animated"
                      id="chk-ani4"
                      type="checkbox"
                    />{" "}
                    Air Conditioning
                  </Label>
                  <Label htmlFor="chk-ani5">
                    <Field
                      name="securityguard"
                      className="checkbox_animated"
                      id="chk-ani5"
                      type="checkbox"
                    />{" "}
                    Security Guard
                  </Label>
                  <Label htmlFor="chk-ani6">
                    <Field
                      name="terrace"
                      className="checkbox_animated"
                      id="chk-ani6"
                      type="checkbox"
                    />{" "}
                    Terrance
                  </Label>
                  <Label htmlFor="chk-ani7">
                    <Field
                      name="laundryservice"
                      className="checkbox_animated"
                      id="chk-ani7"
                      type="checkbox"
                    />{" "}
                    Laundry Service
                  </Label>
                  {/* <Label htmlFor="chk-ani8">
                    <Field
                      name="checkBoxes"
                      value="Air Conditioning"
                      className="checkbox_animated"
                      id="chk-ani8"
                      type="checkbox"
                    />{" "}
                    Elevator Lift
                  </Label> */}
                  <Label htmlFor="chk-ani9">
                    <Field
                      name="balcony"
                      className="checkbox_animated"
                      id="chk-ani9"
                      type="checkbox"
                    />{" "}
                    Balcony
                  </Label>
                </div>
              </Col>
              <Col sm="12" className="form-btn">
                <Button type="submit" className="btn btn-gradient btn-pill">
                  Submit
                </Button>
              </Col>
            </Row>
          </div>
        </Form>
      )}
    />
  );
};

export default AddPropertyForm;
