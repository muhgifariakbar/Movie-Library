import express from 'express';
const app = express();
import { Router } from 'express';
const port = 3000;
// const router = require('./router/index');
import router from './router/index';
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
