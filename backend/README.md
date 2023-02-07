# lithium-challenge-api

A simple api that handle users authentication on Lithium

## Features

- Register: `POST /api/v1/auth/register`
- Login: `POST /api/v1/auth/login`

## Getting Started

- Install NodeJS and yarn on your computer
- Use the .env.sample file to setup your environmental variables
- This projects requires two `.env` files, one for test `.env.test` and the other for development `.env.dev`
- Run `npm install` or `yarn install` to install all dependencies
- Run `npm run db:migrate` or `yarn db:migrate` to migrate the database
- Run `npm run dev` or `yarn dev` to start the server locally
- Run `npm run build` or `yarn build` to build the project for production
- Run `npm start` or `yarn start` to start the server after build
- Interact with localhost:[PORT] in POSTMAN to access the application

## Testing

- run `npm test` or `yarn test`, This will run test with code coverage

## Documentation

- Find app documentation at `/api-docs`

## Technologies

- NodeJs
- ExpressJs
- Typescript
- Bcrypt
- Helmet
- PG
- Sequelize
- Jest
- Supertest
- Nodemon
- Joi
- Postgres
- Swagger

## Author

- [Odumah Solomon](https://github.com/slimsolz)
