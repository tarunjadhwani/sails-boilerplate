var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  db.createTable('users', {
    id: {
        type: 'int',
        primaryKey: true,
        autoIncrement: true,
        unsigned: true,
        notNull: true
    },
    username: 'string',
    email: {
        type: 'string',
        unique: true
    },
    password: 'string',
    createdAt: {
      type: 'datetime'
    },
    updatedAt: {
      type: 'datetime'
    }

  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('users', callback);
  // callback();
};
