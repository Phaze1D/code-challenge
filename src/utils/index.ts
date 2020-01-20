export const decode = (encodedText, encoding) => {
  const buffer = new Buffer(encodedText, encoding);
  return buffer.toString('utf8');
};
