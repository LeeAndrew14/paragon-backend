'use strict';

import jwt from 'jsonwebtoken';
import serverConfig from '../config/server.json';

// Authentication middleware
export default (req, res, next) => {
  const authToken = req.headers.authorization;

  if (authToken && authToken !== null) {
    try {
      const token = authToken.split(' ');
      req.user = jwt.verify(token[1], serverConfig.secret);
    } catch (err) {
      console.warn('Invalid token detected');
    }
  } else req.user = {};

  next();
};
