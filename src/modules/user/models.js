'use strict';

// User
export default (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.TEXT,
    },
    password: {
      type: DataTypes.TEXT,
    },
    role: {
      type: DataTypes.TEXT,
    },
  });

  return User;
};
