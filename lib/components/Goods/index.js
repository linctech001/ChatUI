"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Goods = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _clsx = _interopRequireDefault(require("clsx"));
var _Flex = require("../Flex");
var _Text = require("../Text");
var _Price = require("../Price");
var _Tag = require("../Tag");
var _IconButton = require("../IconButton");
var _Button = require("../Button");
var _ConfigProvider = require("../ConfigProvider");
var _excluded = ["className", "type", "img", "name", "desc", "tags", "locale", "currency", "price", "count", "unit", "action", "elderMode", "children", "originalPrice", "meta", "status"];
var Goods = exports.Goods = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var configCtx = (0, _ConfigProvider.useConfig)();
  var className = props.className,
    type = props.type,
    img = props.img,
    name = props.name,
    desc = props.desc,
    _props$tags = props.tags,
    tags = _props$tags === void 0 ? [] : _props$tags,
    locale = props.locale,
    currency = props.currency,
    price = props.price,
    count = props.count,
    unit = props.unit,
    action = props.action,
    oElderMode = props.elderMode,
    children = props.children,
    originalPrice = props.originalPrice,
    meta = props.meta,
    status = props.status,
    other = (0, _objectWithoutProperties2.default)(props, _excluded);
  var elderMode = oElderMode || configCtx.elderMode;
  var isOrder = type === 'order' && !elderMode;
  var isGoods = type !== 'order' && !elderMode;
  var priceProps = {
    currency: currency,
    locale: locale
  };
  var priceCont = price != null && /*#__PURE__*/_react.default.createElement(_Price.Price, (0, _extends2.default)({
    price: price
  }, priceProps));
  var countUnit = /*#__PURE__*/_react.default.createElement("div", {
    className: "Goods-countUnit"
  }, count && /*#__PURE__*/_react.default.createElement("span", {
    className: "Goods-count"
  }, "\xD7", count), unit && /*#__PURE__*/_react.default.createElement("span", {
    className: "Goods-unit"
  }, unit));
  return /*#__PURE__*/_react.default.createElement(_Flex.Flex, (0, _extends2.default)({
    className: (0, _clsx.default)('Goods', className),
    "data-type": type,
    "data-elder-mode": elderMode,
    ref: ref
  }, other), img && /*#__PURE__*/_react.default.createElement("img", {
    className: "Goods-img",
    src: img,
    alt: name
  }), /*#__PURE__*/_react.default.createElement(_Flex.FlexItem, {
    className: "Goods-main"
  }, isGoods && action && /*#__PURE__*/_react.default.createElement(_IconButton.IconButton, (0, _extends2.default)({
    className: "Goods-buyBtn",
    icon: "cart"
  }, action)), /*#__PURE__*/_react.default.createElement(_Text.Text, {
    as: "h4",
    truncate: isOrder ? 2 : true,
    className: "Goods-name"
  }, name), /*#__PURE__*/_react.default.createElement(_Text.Text, {
    className: "Goods-desc",
    truncate: elderMode
  }, desc), elderMode ? /*#__PURE__*/_react.default.createElement(_Flex.Flex, {
    alignItems: "center",
    justifyContent: "space-between"
  }, priceCont, action && /*#__PURE__*/_react.default.createElement(_Button.Button, (0, _extends2.default)({
    size: "sm"
  }, action))) : /*#__PURE__*/_react.default.createElement("div", {
    className: "Goods-tags"
  }, tags.map(function (t) {
    return /*#__PURE__*/_react.default.createElement(_Tag.Tag, {
      color: "primary",
      key: t.name
    }, t.name);
  })), isGoods && /*#__PURE__*/_react.default.createElement(_Flex.Flex, {
    alignItems: "flex-end"
  }, /*#__PURE__*/_react.default.createElement(_Flex.FlexItem, null, priceCont, originalPrice && /*#__PURE__*/_react.default.createElement(_Price.Price, (0, _extends2.default)({
    price: originalPrice,
    original: true
  }, priceProps)), meta && /*#__PURE__*/_react.default.createElement("span", {
    className: "Goods-meta"
  }, meta)), countUnit), children), isOrder && /*#__PURE__*/_react.default.createElement("div", {
    className: "Goods-aside"
  }, priceCont, countUnit, /*#__PURE__*/_react.default.createElement("span", {
    className: "Goods-status"
  }, status), action && /*#__PURE__*/_react.default.createElement(_Button.Button, (0, _extends2.default)({
    className: "Goods-detailBtn"
  }, action))));
});