const _pipe =
  (f, g) =>
  (...args) =>
    g(f(...args));

// https://vanslaars.io/articles/create-pipe-function
// https://dev.to/joelbonetr/js-functional-concepts-pipe-and-compose-1mho
export const pipe = (...fns) => fns.reduce(_pipe);
