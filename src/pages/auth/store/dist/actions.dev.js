"use strict";

var _interopRequireDefault = require("/home/tisaude/\xC1rea de Trabalho/sustent-front/node_modules/@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("/home/tisaude/\xC1rea de Trabalho/sustent-front/node_modules/@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionLogoutUser = exports.ActionVerifyToken = exports.ActionLoginUser = exports.ActionSetHeadersAxios = exports.ActionSetUser = exports.ActionSetToken = void 0;

var types = _interopRequireWildcard(require("./mutation-types"));

var _http = require("../../../http/http");

var _quasar = require("quasar");

var _index = _interopRequireDefault(require("../../../store/index"));

var Storage = _interopRequireWildcard(require("../storage/storage"));

var ActionSetToken = function ActionSetToken(_ref, payload) {
  var commit = _ref.commit;
  commit(types.SET_TOKEN, payload);
};

exports.ActionSetToken = ActionSetToken;

var ActionSetUser = function ActionSetUser(_ref2, payload) {
  var commit = _ref2.commit;
  commit(types.SET_USER, payload);
};

exports.ActionSetUser = ActionSetUser;

var ActionSetHeadersAxios = function ActionSetHeadersAxios(_ref3) {
  var token = _ref3.state.token;
  _http.Http.defaults.headers.common = {
    Authorization: "Bearer ".concat(token)
  };
};

exports.ActionSetHeadersAxios = ActionSetHeadersAxios;

var ActionLoginUser = function ActionLoginUser(_ref4, payload) {
  var dispatch = _ref4.dispatch;
  var email = payload.email,
      passwordUser = payload.passwordUser;
  return new Promise(function (resolve, reject) {
    _http.Http.post("/login", {
      email: email,
      passwordUser: passwordUser
    }).then(function (response) {
      dispatch("ActionSetUser", response.data.user);
      Storage.setLocalToken(response.data.token);
      dispatch("ActionSetToken", response.data.token);
      dispatch("ActionSetHeadersAxios");

      _index.default.$router.push({
        name: "home"
      });

      resolve(response.data);
    }).catch(function (error) {
      console.log(error);
      reject(error);
    });
  });
};

exports.ActionLoginUser = ActionLoginUser;

var ActionVerifyToken = function ActionVerifyToken(_ref5, next) {
  var dispatch = _ref5.dispatch;
  return new Promise(function (resolve, reject) {
    var token = Storage.getLocalToken();
    dispatch("ActionSetToken", token);
    dispatch("ActionSetHeadersAxios");

    _http.Http.get("/session").then(function (response) {
      dispatch("ActionSetUser", response.data);
      next();
      resolve(response.data);
    }).catch(function (error) {
      console.log(error);
      next({
        name: "login"
      });
      reject(error);
    });
  });
};

exports.ActionVerifyToken = ActionVerifyToken;

var ActionLogoutUser = function ActionLogoutUser(_ref6, payload) {
  var dispatch = _ref6.dispatch;
  Storage.deleteLocalToken();
  dispatch("ActionSetUser", null);
  dispatch("ActionSetToken", "");
  _http.Http.defaults.headers.common = {};

  _index.default.$router.push({
    name: "login"
  });
};

exports.ActionLogoutUser = ActionLogoutUser;