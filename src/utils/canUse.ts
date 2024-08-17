const testCache = {
  passiveListener: () => {
    let supportsPassive = false;
    try {
      const opts = Object.defineProperty({}, 'passive', {
        // eslint-disable-next-line
        get() {
          supportsPassive = true;
        },
      });
      // @ts-ignore
      if (typeof window !== 'undefined') {
        // @ts-ignore
        window.addEventListener('test', null, opts);
      }
    } catch (e) {
      // No support
    }
    return supportsPassive;
  },
  // @ts-ignore
  smoothScroll: () => {
    if (typeof document !== 'undefined') {
      return 'scrollBehavior' in document.documentElement.style;
    }
  },
  // @ts-ignore
  touch: () => {
    if (typeof window !== 'undefined') {
      return 'ontouchstart' in window;
    }
  },
};

export function addTest(name: string, test: Function) {
  // @ts-ignore
  testCache[name] = test();
}

export default function canUse(name: string) {
  // @ts-ignore
  return testCache[name]();
}
