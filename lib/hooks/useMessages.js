"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useMessages;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = require("react");
var _utils = require("../utils");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2.default)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TIME_GAP = 5 * 60 * 1000;
var lastTs = 0;
var makeMsg = function makeMsg(msg, id) {
  var ts = msg.createdAt || Date.now();
  var hasTime = msg.hasTime || ts - lastTs > TIME_GAP;
  if (hasTime) {
    lastTs = ts;
  }
  return _objectSpread(_objectSpread({}, msg), {}, {
    _id: msg._id || id || (0, _utils.getRandomString)(),
    createdAt: ts,
    position: msg.position || 'left',
    hasTime: hasTime
  });
};
function useMessages() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var initialMsgs = (0, _react.useMemo)(function () {
    return initialState.map(function (t) {
      return makeMsg(t);
    });
  }, [initialState]);
  var _useState = (0, _react.useState)(initialMsgs),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    messages = _useState2[0],
    setMessages = _useState2[1];
  var prependMsgs = (0, _react.useCallback)(function (msgs) {
    setMessages(function (prev) {
      return [].concat((0, _toConsumableArray2.default)(msgs), (0, _toConsumableArray2.default)(prev));
    });
  }, []);
  var updateMsg = (0, _react.useCallback)(function (id, msg) {
    setMessages(function (prev) {
      return prev.map(function (t) {
        return t._id === id ? makeMsg(msg, id) : t;
      });
    });
  }, []);
  var appendMsg = (0, _react.useCallback)(function (msg) {
    var newMsg = makeMsg(msg);
    setMessages(function (prev) {
      return [].concat((0, _toConsumableArray2.default)(prev), [newMsg]);
    });
  }, []);
  var deleteMsg = (0, _react.useCallback)(function (id) {
    setMessages(function (prev) {
      return prev.filter(function (t) {
        return t._id !== id;
      });
    });
  }, []);
  var resetList = (0, _react.useCallback)(function () {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    setMessages(list);
  }, []);
  return {
    messages: messages,
    prependMsgs: prependMsgs,
    appendMsg: appendMsg,
    updateMsg: updateMsg,
    deleteMsg: deleteMsg,
    resetList: resetList
  };
}