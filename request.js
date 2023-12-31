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
  allDealerApi(FilterData) {
    return new Promise((next, error) => {
      authAxios
        .post("/api/compliance/dealers/", FilterData, getToken())
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

  AllProperties(filter) {
    return new Promise((next, error) => {
      authAxios
        .post(`/property/fetch/`, filter, getToken())
        .then((d) => {
          next(d.data);
        })
        .catch((err) => {
          next({ error: true, err });
          this.error(err);
        });
    });
  }

  propertyDetails(id) {
    return new Promise((next, error) => {
      authAxios
        .post(`/property/${id}/`, {}, getToken())
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

  updateProperty(id, data) {
    return new Promise((next, error) => {
      authAxios
        .post(`/property/update/${id}/`, data, uploadFile())
        .then((d) => {
          next(d.data);
        })
        .catch((err) => {
          next({ error: true, err });
          this.error(err);
        });
    });
  }

  updatePropertyStatus(id, data) {
    return new Promise((next, error) => {
      authAxios
        .post(`property/desable/${id}/`, data, getToken())
        .then((d) => {
          next(d.data);
        })
        .catch((err) => {
          next({ error: true, err });
          this.error(err);
        });
    });
  }

  deleteProperty(id) {
    return new Promise((next, error) => {
      authAxios
        .post(`property/delete/${id}/`, {}, getToken())
        .then((d) => {
          next(d.data);
        })
        .catch((err) => {
          next({ error: true, err });
          this.error(err);
        });
    });
  }

  LatestProperty(id, data) {
    return new Promise((next, error) => {
      authAxios
        .post(`api/Compliance/property/LatestProperty/${id}/`, data, getToken())
        .then((d) => {
          next(d.data);
        })
        .catch((err) => {
          next({ error: true, err });
          this.error(err);
        });
    });
  }

  LatestPropertyForSale(id, data) {
    return new Promise((next, error) => {
      authAxios
        .post(`api/Compliance/property/LatestForSale/${id}/`, data, getToken())
        .then((d) => {
          next(d.data);
        })
        .catch((err) => {
          next({ error: true, err });
          this.error(err);
        });
    });
  }

  // User API ::

  AllUserDetails(filter) {
    return new Promise((next, error) => {
      authAxios
        .post(`/api/compliance/normlausers/`, filter, getToken())
        .then((d) => {
          next(d.data);
        })
        .catch((err) => {
          next({ error: true, err });
          this.error(err);
        });
    });
  }

  setUserStatus(id, data) {
    return new Promise((next, error) => {
      authAxios
        .post(`api/user/block-unblock/${id}/`, data, getToken())
        .then((d) => {
          next(d.data);
        })
        .catch((err) => {
          next({ error: true, err });
          this.error(err);
        });
    });
  }

  deleteUser(id) {
    return new Promise((next, error) => {
      authAxios
        .delete(`/api/users/delete/${id}/`, getToken())
        .then((d) => {
          next(d.data);
        })
        .catch((err) => {
          next({ error: true, err });
          this.error(err);
        });
    });
  }

  //Messages ::

  allMessagesApi(filter) {
    return new Promise((next, error) => {
      authAxios
        .post(`api/compliance/contactUsdata/`, filter, getToken())
        .then((d) => {
          next(d.data);
        })
        .catch((err) => {
          next({ error: true, err });
          this.error(err);
        });
    });
  }

  //
  //
}

export default new Request();
