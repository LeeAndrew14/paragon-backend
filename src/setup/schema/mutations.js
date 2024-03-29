'use strict';

import {GraphQLObjectType} from 'graphql';

// App imports
import * as user from '../../modules/user/mutations';

// Mutation
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: 'API Mutations [Create, Update, Delete]',
  fields: () => ({
    ...user,
  }),
});

export default mutation;
