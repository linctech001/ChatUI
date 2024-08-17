import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "onSearch", "onChange", "onClear", "value", "clearable", "showSearch"];
import React, { useState } from 'react';
import clsx from 'clsx';
import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { Button } from '../Button';
import { Input } from '../Input';
import { useLocale } from '../ConfigProvider';
export var Search = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
    onSearch = props.onSearch,
    onChange = props.onChange,
    onClear = props.onClear,
    value = props.value,
    _props$clearable = props.clearable,
    clearable = _props$clearable === void 0 ? true : _props$clearable,
    _props$showSearch = props.showSearch,
    showSearch = _props$showSearch === void 0 ? true : _props$showSearch,
    other = _objectWithoutProperties(props, _excluded);
  var _useState = useState(value || ''),
    _useState2 = _slicedToArray(_useState, 2),
    query = _useState2[0],
    setQuery = _useState2[1];
  var _useLocale = useLocale('Search'),
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
  return /*#__PURE__*/React.createElement("div", {
    className: clsx('Search', className),
    ref: ref
  }, /*#__PURE__*/React.createElement(Icon, {
    className: "Search-icon",
    type: "search"
  }), /*#__PURE__*/React.createElement(Input, _extends({
    className: "Search-input",
    type: "search",
    value: query,
    enterKeyHint: "search",
    onChange: handleChange,
    onKeyDown: handleKeyDown
  }, other)), clearable && query && /*#__PURE__*/React.createElement(IconButton, {
    className: "Search-clear",
    icon: "x-circle-fill",
    onClick: handleClear
  }), showSearch && /*#__PURE__*/React.createElement(Button, {
    className: "Search-btn",
    color: "primary",
    onClick: handleSearchClick
  }, trans('search')));
});