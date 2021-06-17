import axios from 'axios'

export const Http = axios.create({
  baseURL: 'http://localhost:4000/api/'
})

Http.interceptors.response.use(
  response => {
    // store.dispatch("auth/ActionModalNotLogged", {
    //   modal: false,
    //   data: {}
    // });
    return response
  },
  error => {
    if (error.response.status === 401) {
    //   store.dispatch("auth/ActionModalNotLogged", {
    //     modal: true,
    //     data: {}
    //   });
    }
    if (error.response.status === 500) {
    //   store.dispatch("auth/ActionModalErrorServer", { modal: true, data: {} });
    }

    return Promise.reject(error.response)
  }
)
