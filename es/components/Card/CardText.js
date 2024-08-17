import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "children"];
import React from 'react';
import clsx from 'clsx';
export var CardText = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
    children = props.children,
    other = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: clsx('CardText', className)
  }, other, {
    ref: ref
  }), typeof children === 'string' ? /*#__PURE__*/React.createElement("p", null, children) : children);
});