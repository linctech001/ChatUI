"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = countLines;
// @ts-nocheck
function countLines(el) {
  if (typeof window !== 'undefined') {
    var styles = window.getComputedStyle(el, null);
    var lh = parseInt(styles.lineHeight, 10);
    var h = parseInt(styles.height, 10);
    return Math.round(h / lh);
  }
}