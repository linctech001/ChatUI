import React from 'react';
import clsx from 'clsx';
export var Tree = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
    children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: clsx('Tree', className),
    role: "tree",
    ref: ref
  }, children);
});