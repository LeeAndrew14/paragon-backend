'use strict';

import path from 'path';
import multer from 'multer';

// App imports
import serverConfig from '../config/server.json';

// File upload configuration and route
export default (server) => {
  console.info('SETUP - Upload...');

  // Set destination
  const storage = multer.diskStorage({
    destination: path.join(__dirname,
        '..', '..', 'public', 'images', 'uploads'),
    filename: (request, file, callback) => {
      callback(null, file.fieldname + '-' + Date.now() +
        path.extname(file.originalname));
    },
  });

  const upload = multer({
    storage: storage,
  }).single('file');

  // Upload route
  server.post(serverConfig.upload.endpoint, (request, response) => {
    upload(request, response, (error) => {
      if (!error) {
        response.json({
          success: true,
          file: request.file.filename,
        });
      } else {
        response.join({
          success: false,
          file: null,
        });
      }
    });
  });
};
