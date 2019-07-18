const dbStartup = require('./database');

module.exports = function() {
  dbStartup(
    {
      dbUser: process.env.MONGO_USER,
      dbPass: process.env.MONGO_PWD,
      mongoUrl: process.env.MONGO_URL
    },
    () => console.info('Mongo connection okay'),
    () => console.error('No Mongo connection')
  );
};
