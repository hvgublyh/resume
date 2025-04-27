const baseWidth = 1920; // Base width for the design
const baseFontSize = 16; // Base font size in px

export const setStyle = (): void => {
  const element = document.documentElement;
  const width = element.clientWidth;
  const rem = (width * baseFontSize) / baseWidth;
  element.style.setProperty('font-size', `${rem}px`);
}

window.addEventListener('resize', setStyle);
setStyle();