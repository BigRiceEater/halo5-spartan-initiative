const mongoose = require('mongoose');

// Removes (node:5604) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
mongoose.set('useCreateIndex', true);

module.exports = function({ dbUser, dbPass, mongoUrl }, success, failure) {
  mongoose.Promise = global.Promise;

  mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    auth: { authSource: 'admin' },
    user: dbUser,
    pass: dbPass
  });

  const db = mongoose.connection;
  db.on('error', failure);
  db.once('open', success);
};
