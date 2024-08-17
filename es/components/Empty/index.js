import React from 'react';
import clsx from 'clsx';
import { Flex } from '../Flex';
var IMAGE_EMPTY = '//gw.alicdn.com/tfs/TB1fnnLRkvoK1RjSZFDXXXY3pXa-300-250.svg';
var IMAGE_OOPS = '//gw.alicdn.com/tfs/TB1lRjJRbvpK1RjSZPiXXbmwXXa-300-250.svg';
export var Empty = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
    type = props.type,
    image = props.image,
    tip = props.tip,
    children = props.children;
  var imgUrl = image || (type === 'error' ? IMAGE_OOPS : IMAGE_EMPTY);
  return /*#__PURE__*/React.createElement(Flex, {
    className: clsx('Empty', className),
    direction: "column",
    center: true,
    ref: ref
  }, /*#__PURE__*/React.createElement("img", {
    className: "Empty-img",
    src: imgUrl,
    alt: tip
  }), tip && /*#__PURE__*/React.createElement("p", {
    className: "Empty-tip"
  }, tip), children);
});