export const barGen = (barCount: number): string => {
  let barCSS: string = '';
  let left: number = 1;
  for (let i = 0; i < barCount + 1; i++) {
    const anim: number = Math.random() * 350 + 1000;
    barCSS += `.bar:nth-child(${i}) { left: ${left}px; animation-duration: ${anim}ms; }`;
    left += 4;
  }
  return barCSS;
};
