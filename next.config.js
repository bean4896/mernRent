/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
      return {
        env: {
          mongodb_username: 'iverson3',
          mongodb_password: 'Slowhand.1996',
          mongodb_clustername: 'test-one',
          mongodb_database: 'house',    
       },
      }
  }
  return {
    env: {
      mongodb_username: 'iverson3',
      mongodb_password: 'Slowhand.1996',
      mongodb_clustername: 'test-one',
      mongodb_database: 'house',    
   },
   reactStrictMode: true,
   swcMinify: true,
   compiler: {
     // Enables the styled-components SWC transform
     styledComponents: true
   }
  }
}