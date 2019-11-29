'use strict';

import graphqlHTTP from 'express-graphql';

// App imports
import serverConfig from '../config/server.json';
import authentication from './authentication';
import schema from './schema';

// Setup GraphQL
export default (server) => {
  console.info('SETUP - GraphQL...');

  server.use(authentication);

  // API (GraphQL on route '/')
  server.use(serverConfig.graphql.endpoint, graphqlHTTP((request) => ({
    schema,
    graphiql: serverConfig.graphql.ide,
    pretty: serverConfig.graphql.pretty,
    context: {
      auth: {
        user: request.user,
        isAuthenticated: request.user && request.user.id > 0,
      },
    },
  })));
};
