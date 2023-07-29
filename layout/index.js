import React, { useEffect, useState } from "react";
import Footer from "../components/Common/Footer";
import Customizer from "./customizer/Customizer";
import Header from "./header";
import Sidebar from "./sidebar";
import TapToTop from "./TapToTop";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [toggle, setToggle] = useState();

  const { token, ValidUser } = useSelector((state) => ({
    token: state.global.token,
    ValidUser: state.global.ValidUser,
  }));

  const authFunc = () => {
    if (!ValidUser) {
      localStorage.clear();
      dispatch({
        type: "globalReducers/SET_USER_TOKEN",
        payload: null,
      });
      return router.push("/authentication/login");
    }
  };

  useEffect(() => {
    authFunc();
  }, [ValidUser]);

  const handleResize = () => {
    if (window.innerWidth > 991) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  useEffect(() => {
    setToggle(window.innerWidth > 991);
    window.addEventListener("resize", handleResize);
    const loacalltStoredToken = localStorage.getItem("token");
    if (!loacalltStoredToken) {
      dispatch({ type: "globalReducers/SET_VALID_USER", payload: false });
    }
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    ValidUser && (
      <>
        <div className="page-wrapper">
          <Header setToggle={setToggle} toggle={toggle} />
          <div className="page-body-wrapper">
            <Sidebar toggle={toggle} setToggle={setToggle} />
            <div className="page-body">{children}</div>
            <Footer />
          </div>
          <TapToTop />
          <Customizer />
        </div>
      </>
    )
  );
};

export default Layout;
