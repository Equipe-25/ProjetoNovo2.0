"use strict";

var _interopRequireWildcard = require("/home/tisaude/\xC1rea de Trabalho/sustent-front/node_modules/@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("/home/tisaude/\xC1rea de Trabalho/sustent-front/node_modules/@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _state = _interopRequireDefault(require("./state"));

var _mutations = _interopRequireDefault(require("./mutations"));

var actions = _interopRequireWildcard(require("./actions"));

var getters = _interopRequireWildcard(require("./getters"));

var _default = {
  state: _state.default,
  actions: actions,
  getters: getters,
  mutations: _mutations.default,
  namespaced: true
};
exports.default = _default;