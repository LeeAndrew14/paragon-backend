'use strict';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// App imports
import serverConfig from '../../config/server.json';
import params from '../../config/params.json';
import models from '../../setup/models';

// Create
export const create = async (parentValue, {name, email, password}) => {
  // User exists with same email check
  const user = await models.User.findOne({where: {email}});

  if (!user) {
    // User does not exists
    const passwordHashed = await bcrypt.hash(password, serverConfig.saltRounds);

    return await models.User.create({
      name,
      email,
      password: passwordHashed,
    });
  } else {
    // User exists
    throw new Error(
        `The email ${email} is already registered. Please try to login`,
    );
  }
};

// Login
export const login = async (parseValue, {email, password}) => {
  const user = await models.User.findOne({where: {email}});

  if (!user) {
    // User does not exists
    throw new Error(`${email} does not exists.`);
  } else {
    const userDetails = user.get();

    // User exists
    const passwordMatch = await bcrypt.compare(password, userDetails.password);

    if (!passwordMatch) {
      // Incorrect password
      throw new Error(`Sorry, wrong password`);
    } else {
      const userDetailsToken = {
        id: userDetails.id,
        name: userDetails.name,
        email: userDetails.email,
        role: userDetails.role,
      };

      return {
        user: userDetails,
        token: jwt.sign(userDetailsToken, serverConfig.secret),
      };
    }
  }
};

export const getById = async (parentValue, {id}) => {
  return await models.User.findOne({where: {id}});
};

export const getAll = async () => {
  return await models.User.findAll();
};

export const remove = async (parentValue, {id}) => {
  return await models.User.destroy({where: {id}});
};

// User genders
export const getGenders = async () => {
  return Object.values(params.user.gender);
};
