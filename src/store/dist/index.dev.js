"use strict";

var _interopRequireDefault = require("/home/tisaude/\xC1rea de Trabalho/sustent-front/node_modules/@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _modules = _interopRequireDefault(require("./modules"));

_vue.default.use(_vuex.default);

var store = new _vuex.default.Store({
  modules: _modules.default
});
var _default = store;
exports.default = _default;