"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLocalToken = exports.deleteLocalToken = exports.getLocalToken = void 0;

var getLocalToken = function getLocalToken() {
  return localStorage.getItem('mynotetoken');
};

exports.getLocalToken = getLocalToken;

var deleteLocalToken = function deleteLocalToken() {
  return localStorage.clear();
};

exports.deleteLocalToken = deleteLocalToken;

var setLocalToken = function setLocalToken(token) {
  localStorage.setItem('mynotetoken', token);
};

exports.setLocalToken = setLocalToken;