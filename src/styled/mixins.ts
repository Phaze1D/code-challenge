

export const boxShadow = (
  size: number,
  inset = false
) => {
  return `
    ${inset ? 'inset' : ''} ${size}px ${size}px ${size * 2}px #c4cad3,
    ${inset ? 'inset' : ''} -${size}px -${size}px ${size * 2}px #ffffff;
  `;
};
