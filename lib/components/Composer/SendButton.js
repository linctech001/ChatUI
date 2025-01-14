"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = require("../Button");
var _ConfigProvider = require("../ConfigProvider");
var SendButton = exports.SendButton = function SendButton(_ref) {
  var disabled = _ref.disabled,
    onClick = _ref.onClick;
  var _useLocale = (0, _ConfigProvider.useLocale)('Composer'),
    trans = _useLocale.trans;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "Composer-actions"
  }, /*#__PURE__*/_react.default.createElement(_Button.Button, {
    className: "Composer-sendBtn",
    disabled: disabled,
    onMouseDown: onClick,
    color: "primary"
  }, trans('send')));
};