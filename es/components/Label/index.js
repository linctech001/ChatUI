import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children"];
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
export var Label = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
    other = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement("label", _extends({
    className: "Label"
  }, other, {
    ref: ref
  }), children);
});