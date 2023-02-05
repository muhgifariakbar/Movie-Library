import express from 'express';
const app = express();
require('pg');
const port = process.env.PORT || 3000;
// const router = require('./router/index');
import router from './router/index';
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
