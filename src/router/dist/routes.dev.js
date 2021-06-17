"use strict";

var _interopRequireWildcard3 = require("/home/tisaude/\xC1rea de Trabalho/sustent-front/node_modules/@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("/home/tisaude/\xC1rea de Trabalho/sustent-front/node_modules/@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _interopRequireWildcard2 = _interopRequireDefault(require("/home/tisaude/\xC1rea de Trabalho/sustent-front/node_modules/@babel/runtime/helpers/interopRequireWildcard"));

var _toConsumableArray2 = _interopRequireDefault(require("/home/tisaude/\xC1rea de Trabalho/sustent-front/node_modules/@babel/runtime/helpers/toConsumableArray"));

var _index = _interopRequireDefault(require("../store/index"));

var Storage = _interopRequireWildcard3(require("../pages/auth/storage/storage"));

var _index2 = require("../pages/auth/index");

var routes = [{
  path: "/",
  component: function component() {
    return Promise.resolve().then(function () {
      return (0, _interopRequireWildcard2.default)(require("layouts/MainLayout.vue"));
    });
  },
  children: [],
  beforeEnter: function beforeEnter(to, from, next) {
    return regeneratorRuntime.async(function beforeEnter$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!Storage.getLocalToken()) {
              _context.next = 5;
              break;
            }

            _context.next = 3;
            return regeneratorRuntime.awrap(_index.default.dispatch("auth/ActionVerifyToken", next));

          case 3:
            _context.next = 6;
            break;

          case 5:
            next({
              name: "login"
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  }
}].concat((0, _toConsumableArray2.default)(_index2.routes), [{
  path: "*",
  component: function component() {
    return Promise.resolve().then(function () {
      return (0, _interopRequireWildcard2.default)(require("../pages/Error404.vue"));
    });
  }
}]);
var _default = routes;
exports.default = _default;