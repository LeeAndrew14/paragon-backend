'use strict';

import {GraphQLObjectType} from 'graphql';

// App imports
import * as user from '../../modules/user/query';

// Query
const query = new GraphQLObjectType({
  name: 'query',
  description: 'API Queries [Read]',
  fields: () => ({
    ...user,
  }),
});

export default query;
