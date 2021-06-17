"use strict";

var _interopRequireDefault = require("/home/tisaude/\xC1rea de Trabalho/sustent-front/node_modules/@babel/runtime/helpers/interopRequireDefault").default;

var _interopRequireWildcard = require("/home/tisaude/\xC1rea de Trabalho/sustent-front/node_modules/@babel/runtime/helpers/interopRequireWildcard").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("/home/tisaude/\xC1rea de Trabalho/sustent-front/node_modules/@babel/runtime/helpers/defineProperty"));

var types = _interopRequireWildcard(require("./mutation-types"));

var _types$SET_USER$types;

var _default = (_types$SET_USER$types = {}, (0, _defineProperty2.default)(_types$SET_USER$types, types.SET_USER, function (state, payload) {
  state.user = payload;
}), (0, _defineProperty2.default)(_types$SET_USER$types, types.SET_TOKEN, function (state, payload) {
  state.token = payload;
}), _types$SET_USER$types);

exports.default = _default;