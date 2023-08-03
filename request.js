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

export const uploadFile = () => {
  return {
    headers: {
      "Content-Type": "multipart/form-data",
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

  getUserData() {
    return new Promise((next, error) => {
      authAxios
        .post("api/compliance/user-info/", {}, getToken())
        .then((d) => {
          next(d.data);
        })
        .catch((err) => {
          next({ error: true, err });
          this.error(err);
        });
    });
  }

  // Dealers ::

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

  updateDealerApi(id, data) {
    return new Promise((next, error) => {
      authAxios
        .post(`/api/dealer/update/${id}/`, data, getToken())
        .then((d) => {
          next(d.data);
        })
        .catch((err) => {
          next({ error: true, err });
          this.error(err);
        });
    });
  }
  getDealerProfile(id) {
    return new Promise((next, error) => {
      authAxios
        .post(`api/dealer/profile/${id}/`, {}, getToken())
        .then((d) => {
          next(d.data);
        })
        .catch((err) => {
          next({ error: true, err });
          this.error(err);
        });
    });
  }

  deleteDealer(id) {
    return new Promise((next, error) => {
      authAxios
        .delete(`/api/dealer/delete/${id}/`, getToken())
        .then((d) => {
          next(d.data);
        })
        .catch((err) => {
          next({ error: true, err });
          this.error(err);
        });
    });
  }

  updateDealerStatus(id, data) {
    return new Promise((next, error) => {
      authAxios
        .post(`api/dealer/change-status/${id}/`, data, getToken())
        .then((d) => {
          next(d.data);
        })
        .catch((err) => {
          next({ error: true, err });
          this.error(err);
        });
    });
  }

  // Properties Api ::

  AllProperties() {
    return new Promise((next, error) => {
      authAxios
        .post(`/property/fetch/`, {}, getToken())
        .then((d) => {
          next(d.data);
        })
        .catch((err) => {
          next({ error: true, err });
          this.error(err);
        });
    });
  }
  createProperty(data) {
    return new Promise((next, error) => {
      authAxios
        .post(`/create-property/`, data, uploadFile())
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
