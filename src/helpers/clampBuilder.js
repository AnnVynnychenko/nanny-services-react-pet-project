export const clampBuilder = (minPx, maxPx) => {
  const minWidth = 320;
  const maxWidth = 1440;

  const slope = (maxPx - minPx) / (maxWidth - minWidth);
  const yAxisIntersection = -minWidth * slope + minPx;

  const vw = (slope * 100).toFixed(2);
  const px = yAxisIntersection.toFixed(2);

  return `clamp(${minPx}px, ${vw}vw + ${px}px, ${maxPx}px)`;
};
