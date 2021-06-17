"use strict";

var _interopRequireDefault = require("/home/tisaude/\xC1rea de Trabalho/sustent-front/node_modules/@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Http = void 0;

var _axios = _interopRequireDefault(require("axios"));

var Http = _axios.default.create({
  baseURL: process.env.API
});

exports.Http = Http;
Http.interceptors.response.use(function (response) {
  // store.dispatch("auth/ActionModalNotLogged", {
  //   modal: false,
  //   data: {}
  // });
  return response;
}, function (error) {
  if (error.response.status === 401) {//   store.dispatch("auth/ActionModalNotLogged", {
    //     modal: true,
    //     data: {}
    //   });
  }

  if (error.response.status === 500) {//   store.dispatch("auth/ActionModalErrorServer", { modal: true, data: {} });
  }

  return Promise.reject(error.response);
});