'use strict';

import {GraphQLSchema} from 'graphql';

// App imports
import query from './queries';
import mutation from './mutations';

// Schema
const schema = new GraphQLSchema({
  query,
  mutation,
});

export default schema;
