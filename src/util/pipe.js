const pipe =
  (...fns) =>
  (args) =>
    fns.reduce((p, fn) => fn(p), args);

export default pipe;
