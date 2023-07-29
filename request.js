import axios from "axios";
import { Apiurl } from "./settings";
// import {
//   fullBrowserVersion,
//   browserName,
//   osVersion,
//   osName,
// } from "react-device-detect";
let authAxios = axios.create({
  baseURL: Apiurl,
});

export const getToken = () => {
  return {
    headers: {
      Authorization: "Token " + localStorage.getItem("token"),
      // type: "WEB",
      // fullbrowserversion: fullBrowserVersion,
      // browsername: browserName,
      // osversion: osVersion,
      // osname: osName,
    },
  };
};

class Request {
  error = (err) => {
    try {
      if (err.response.status === 401 || err.response.status === 403) {
        localStorage.clear();
      }
    } catch (e) {}
  };

  // ------------------------------------------- API Start from here --------------------------------------------- //

  login(data) {
    return new Promise((next, error) => {
      authAxios
        .post("/api/compliance/login/", data)
        .then((d) => {
          next(d.data);
        })
        .catch((err) => {
          next({ error: true, err });
          this.error(err);
        });
    });
  }

  logout(data) {
    return new Promise((next, error) => {
      authAxios
        .post("/api/compliance/logout/", {}, getToken())
        .then((d) => {
          next(d.data);
        })
        .catch((err) => {
          next({ error: true, err });
          this.error(err);
        });
    });
  }

  getUserData() {
    return new Promise((next, error) => {
      authAxios
        .post("/administrator/user/", {}, getToken())
        .then((d) => {
          next(d.data);
        })
        .catch((err) => {
          next({ error: true, err });
          this.error(err);
        });
    });
  }
}

export default new Request();
