// @ts-nocheck
export default function countLines(el) {
  if (typeof window !== 'undefined') {
    var styles = window.getComputedStyle(el, null);
    var lh = parseInt(styles.lineHeight, 10);
    var h = parseInt(styles.height, 10);
    return Math.round(h / lh);
  }
}