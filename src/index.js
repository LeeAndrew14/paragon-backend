'use strict';

import express from 'express';

// App imports
import setupLoadModules from './setup/load-modules';
import setupGraphQL from './setup/graphql';
import setupUpload from './setup/upload';
import setupStartServer from './setup/start-server';

// Create express server
const server = express();

// Setup load modules
setupLoadModules(server);

// Setup uploads
setupUpload(server);

// Setup GraphQL
setupGraphQL(server);

// Start Server
setupStartServer(server);
