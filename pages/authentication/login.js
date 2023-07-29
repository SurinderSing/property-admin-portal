import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Lock, Mail } from "react-feather";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { useRouter } from "next/router";
import Img from "../../components/Common/Image";
import { useSelector, useDispatch } from "react-redux";
import Request from "../../request";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showpassword, setShowpassword] = useState(false);
  const { ValidUser } = useSelector((state) => ({
    ValidUser: state.global.ValidUser,
  }));

  useEffect(() => {
    if (ValidUser) {
      router.push("/dashboard");
    }
  }, [ValidUser]);

  const onFinish = async (credentials) => {
    const { data, success, error, message } = await Request.login(credentials);
    if (success && data) {
      dispatch({
        type: "globalReducers/SET_VALID_USER",
        payload: true,
      });
      localStorage.setItem("token", data.token);
      dispatch({
        type: "globalReducers/SET_USER_TOKEN",
        payload: data.token,
      });
      return toast.success(message || "Logged In successfully!");
    }
    return toast.error(message || "Oops! Something went wrong.");
  };

  return (
    !ValidUser && (
      <div className="authentication-box">
        <Container fluid={true} className="container-fluid">
          <Row className="log-in">
            <Col xxl="3" xl="4" lg="5" md="6" sm="8" className="form-login">
              <Card className="card">
                <CardBody className="card-body">
                  <div className="title-3 text-start">
                    <h2>Log in</h2>
                  </div>
                  <Formik
                    initialValues={{
                      email: "",
                      password: "",
                    }}
                    validationSchema={Yup.object().shape({
                      email: Yup.string().required("Enter valid Email..!"),
                      password: Yup.string().required(
                        "Password is required..!"
                      ),
                    })}
                    onSubmit={(values) => onFinish(values)}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <div className="form-group">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <Mail size={20} style={{ marginRight: "1em" }} />
                            </div>
                            <Field
                              type="email"
                              className={`form-control ${
                                errors.email && touched.email
                                  ? "is-invalid"
                                  : ""
                              }`}
                              name="email"
                              placeholder="Enter email"
                            />
                          </div>
                          {errors.email && touched.email && (
                            <div className="text-danger ms-4">
                              {errors.email}
                            </div>
                          )}
                        </div>
                        <div className="form-group">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <Lock size={20} style={{ marginRight: "1em" }} />
                            </div>
                            <Field
                              type={`${showpassword ? "text" : "password"}`}
                              name="password"
                              id="pwd-input"
                              className={`form-control ${
                                errors.password && touched.password
                                  ? "is-invalid"
                                  : ""
                              }`}
                              placeholder="Password"
                            />
                            <div className="input-group-apend">
                              <i
                                id="pwd-icon"
                                className={`far fa-eye${
                                  !showpassword ? "-slash" : ""
                                }`}
                                onClick={() => {
                                  setShowpassword(!showpassword);
                                }}
                              />
                            </div>
                          </div>
                          {errors.password && touched.password && (
                            <div className="text-danger ms-4">
                              {errors.password}
                            </div>
                          )}
                          <div className="important-note">
                            password should be a minimum of 8 characters and
                            should contains letters and numbers
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="btn btn-gradient btn-pill me-sm-3 me-2"
                        >
                          Log in
                        </button>
                      </Form>
                    )}
                  </Formik>
                </CardBody>
              </Card>
            </Col>
            <Col xxl="7" xl="7" lg="6" className="offset-xxl-1 auth-img">
              <Img src={`/assets/images/svg/2.jpg`} alt="" className="bg-img" />
            </Col>
          </Row>
        </Container>
      </div>
    )
  );
};

export default LogIn;

LogIn.getLayout = function getLayout(LogIn) {
  return <>{LogIn}</>;
};
