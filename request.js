import axios from "axios";
import { Apiurl } from "./settings";

let authAxios = axios.create({
  baseURL: Apiurl,
});

export const getToken = () => {
  return {
    headers: {
      Authorization: "Token " + localStorage.getItem("token"),
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

  //TODO: implement
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

  // Agents ::

  addDealerApi(data) {
    return new Promise((next, error) => {
      authAxios
        .post("/api/dealer/create/", data, getToken())
        .then((d) => {
          next(d.data);
        })
        .catch((err) => {
          next({ error: true, err });
          this.error(err);
        });
    });
  }
  allDealerApi() {
    return new Promise((next, error) => {
      authAxios
        .post("/api/compliance/dealers/", {}, getToken())
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