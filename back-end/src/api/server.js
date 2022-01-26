require('dotenv').config();

const { API_PORT = 3001 } = process.env;
const app = require('./app');

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
