import { breakpoints } from '../styles/breakPoints';

export const clampBuilder = (minPx, maxPx) => {
  const { mobile, desktop } = breakpoints;

  const minWidth = Number.parseFloat(mobile) || 320;
  const maxWidth = Number.parseFloat(desktop) || 1440;

  const slope = (maxPx - minPx) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minPx;

  const vw = Number((slope * 100).toFixed(4));
  const px = Number(yAxisIntersection.toFixed(4));

  let val = `${vw}vw`;
  if (px > 0) {
    val += ` + ${px}px`;
  } else if (px < 0) {
    val += ` - ${Math.abs(px)}px`;
  }

  return `clamp(${minPx}px, ${val}, ${maxPx}px)`;
};
