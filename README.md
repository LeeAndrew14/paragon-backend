# Paragon
- **Paragon** backend built with Node, GraphQL, Express, Sequelize (MySQL) and JWT Auth
- Written in ES6+ using Babel

## Core Structure
    paragon-backend
      ├── public
      ├── src
      │   ├── config
      │   ├── migrations
      │   ├── modules
      │   ├── seeders
      │   ├── setup
      │   └── index.js
      ├── package.json
      ├── .gitignore
      └── README.md

## Setup and Running
- Prerequisites
  - Node 10
  - MySQL 5.7
- Clone repo `git clone https://gitlab.com/finlee98/paragon-backend.git`
- Switch to `paragon-backend` directory `cd paragon-backend`
- Configurations
  - Modify `/src/config/database.json` for database credentials
  - Modify `.env` for PORT (optional)
- Setup
  - Create paragon database using MySql (might create script for auto generate database)
  - Install packages and database setup (migrations and seed) `npm run setup`
- Development
  - Run API `npm start`, then navigate GraphiQL using your favorite browser in http://localhost:8000/
- Production
  - Run API `npm run start:prod`, creates an optimized build in `build` directory and runs the server 🚧 

## Resources and Inspirations (this could help us a lot 💪)
- ✍️ Opinionated project architecture for Full-Stack JavaScript Applications - [GitHub](https://github.com/atulmy/fullstack-javascript-architecture)
- 🌈 Simple Fullstack GraphQL Application - [GitHub](https://github.com/atulmy/fullstack-graphql)
- Zero to GraphQL in 30 Minutes - [YouTube](https://www.youtube.com/watch?v=UBGzsb2UkeY&list=PLkuiMQfg5DujhOSZ1A8kDl0hKV_ICTjp-)
- Building a GraphQL Server [YouTube Playlist](https://www.youtube.com/playlist?list=PLillGF-RfqbYZty73_PHBqKRDnv7ikh68)