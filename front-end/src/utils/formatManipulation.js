export const getDate = (dateTime) => new Date(dateTime).toLocaleDateString('pt-BR');

export const getPrice = (price) => `R$ ${Number(price).toFixed(2)}`.replace('.', ',');

export const padNumber = (n, pad) => {
  let string = n.toString();
  while (string.length < pad) {
    string = `0${string}`;
  }
  return string;
};
