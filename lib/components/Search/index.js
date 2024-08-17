"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Search = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _Icon = require("../Icon");
var _IconButton = require("../IconButton");
var _Button = require("../Button");
var _Input = require("../Input");
var _ConfigProvider = require("../ConfigProvider");
var _excluded = ["className", "onSearch", "onChange", "onClear", "value", "clearable", "showSearch"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
var Search = exports.Search = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var className = props.className,
    onSearch = props.onSearch,
    onChange = props.onChange,
    onClear = props.onClear,
    value = props.value,
    _props$clearable = props.clearable,
    clearable = _props$clearable === void 0 ? true : _props$clearable,
    _props$showSearch = props.showSearch,
    showSearch = _props$showSearch === void 0 ? true : _props$showSearch,
    other = (0, _objectWithoutProperties2.default)(props, _excluded);
  var _useState = (0, _react.useState)(value || ''),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    query = _useState2[0],
    setQuery = _useState2[1];
  var _useLocale = (0, _ConfigProvider.useLocale)('Search'),
    trans = _useLocale.trans;
  var handleChange = function handleChange(val) {
    setQuery(val);
    if (onChange) {
      onChange(val);
    }
  };
  var handleClear = function handleClear() {
    setQuery('');
    if (onClear) {
      onClear();
    }
  };
  var handleKeyDown = function handleKeyDown(e) {
    if (e.keyCode === 13) {
      if (onSearch) {
        onSearch(query, e);
      }
      e.preventDefault();
    }
  };
  var handleSearchClick = function handleSearchClick(e) {
    if (onSearch) {
      onSearch(query, e);
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)('Search', className),
    ref: ref
  }, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    className: "Search-icon",
    type: "search"
  }), /*#__PURE__*/_react.default.createElement(_Input.Input, (0, _extends2.default)({
    className: "Search-input",
    type: "search",
    value: query,
    enterKeyHint: "search",
    onChange: handleChange,
    onKeyDown: handleKeyDown
  }, other)), clearable && query && /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, {
    className: "Search-clear",
    icon: "x-circle-fill",
    onClick: handleClear
  }), showSearch && /*#__PURE__*/_react.default.createElement(_Button.Button, {
    className: "Search-btn",
    color: "primary",
    onClick: handleSearchClick
  }, trans('search')));
});