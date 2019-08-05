[![Coverage Status](https://coveralls.io/repos/github/efalayi/rpn-generator/badge.svg?branch=develop)](https://coveralls.io/github/efalayi/rpn-generator?branch=develop)
# rpn-generator
This is a React based app designed to generate unique 10 digit phone numbers

##### Features
- A user can generate new phone numbers
- A user can sort phone numbers in ascending and descending order
- A user can can get maximum and minimum phone numbers

***
#### Technology
This application was developed purely with JavaScript using React Architecture,
NodeJs, and Express.

###### Dependencies
- [Babel](https://babeljs.io/)
- [React](https://facebook.github.io/react/)
- [React-dom](https://www.npmjs.com/package/react-dom)
- [Express](https://expressjs.com/)
- [Node](https://nodejs.org/en/)

***
#### Getting Started
- Clone the project from repository [https://github.com/efalayi/rpn-generator](https://github.com/efalayi/rpn-generator)
- In your terminal, change directory to the cloned folder and run `yarn install`. This installs all the app's dependencies.
- Create a `.env` file using the sample specified in [.env.sample](.env.sample)
- To start the app in production mode, set your `NODE_ENV` to `production` and run `yarn start`
- To start the app in development mode, set your `NODE_ENV` to `development` and run `yarn run start:dev`
- Point your browser to `localhost`, using the port defined in your `.env file`.
- Alternatively, you can access the app on [rpn-generator.herokuapp.com/](https://rpn-generator.herokuapp.com/)

#### Testing
Server modules were tested using Mocha while client modules were tested using Jest, React-Test-Renderer and Enzyme.

###### NPM Scripts
To make development easier, some NPM scripts were written:
- `npm run test:client` runs tests for client modules using Jest
- `npm run test:server` runs test for server modules using Mocha
- `npm run start:dev` runs app on local machine

***
##### License
[MIT](LICENSE.txt) © 2018 | [Esther Falayi](github.com/andela-efalayi/) | 
Andela, Nigeria