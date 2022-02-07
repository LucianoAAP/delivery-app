const admUserInfo = require('./data/admUserInfo.json');
const customerUserInfo = require('./data/customerUserInfo.json');
const sellerUserInfo = require('./data/sellerUserInfo.json');

export const admUserInfoMock = () => JSON.stringify(admUserInfo);
export const customerUserInfoMock = () => JSON.stringify(customerUserInfo);
export const sellerUserInfoMock = () => JSON.stringify(sellerUserInfo);
