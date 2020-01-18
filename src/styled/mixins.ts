

export const boxShadow = (
  size: number,
  inset = false
) => {
  return `
    ${inset ? 'inset' : ''} ${size}px ${size}px ${size * 2}px #373f52,
    ${inset ? 'inset' : ''} -${size}px -${size}px ${size * 2}px #4b556e;
  `;
};
