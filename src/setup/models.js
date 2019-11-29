'use strict';

import Sequelize from 'sequelize';

// App imports
import databaseConnection from './database';

const models = {
  User: databaseConnection.import('../modules/user/models'),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = databaseConnection;
models.sequelize = Sequelize;

export default models;
