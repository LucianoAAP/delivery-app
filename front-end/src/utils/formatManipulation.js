export const getDate = (dateTime) => {
  const date = dateTime.split('T')[0];
  const splittedDate = date.split('-');
  return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`;
};

export const getPrice = (price) => `R$ ${Number(price).toFixed(2)}`.replace('.', ',');

export const padNumber = (n, pad) => {
  let string = n.toString();
  while (string.length < pad) {
    string = `0${string}`;
  }
  return string;
};
