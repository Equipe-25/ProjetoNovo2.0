"use strict";

var _interopRequireWildcard = require("/home/tisaude/\xC1rea de Trabalho/sustent-front/node_modules/@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("/home/tisaude/\xC1rea de Trabalho/sustent-front/node_modules/@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _state = _interopRequireDefault(require("./state"));

var getters = _interopRequireWildcard(require("./getters"));

var mutations = _interopRequireWildcard(require("./mutations"));

var actions = _interopRequireWildcard(require("./actions"));

var _default = {
  namespaced: true,
  getters: getters,
  mutations: mutations,
  actions: actions,
  state: _state.default
};
exports.default = _default;