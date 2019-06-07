import * as express from 'express';

const app = express();
const server = app.listen(() => {
  /*tslint:disable-next-line*/
  console.log('server started: ', server.address());
});
