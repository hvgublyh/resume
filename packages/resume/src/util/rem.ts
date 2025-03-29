const baseWidth = 1920; // Base width for the design
const baseFontSize = 16; // Base font size in px

export const setStyle = (): void => {
  const el = document.documentElement;
  const width = el.clientWidth;
  const rem = (width * baseFontSize) / baseWidth;
  if (el && el.style) {
    el.style.setProperty('font-size', `${rem}px`);
  }
}

window.onresize = setStyle;
setStyle();