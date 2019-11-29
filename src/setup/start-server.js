'use strict';

import {PORT, NODE_ENV} from '../config/env';

// Start server
export default (server) => {
  console.info('SETUP - Starting sever...');

  server.listen(PORT, (error) => {
    if (error) {
      console.error('ERROR - Unable to start server');
    } else {
      console.info(`INFO - Server listening in http://localhost:${PORT} [${NODE_ENV}]`);
    }
  });
};
