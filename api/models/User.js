var bcrypt = require('bcrypt');
var moment = require("moment");

module.exports = {
    autoPK: true,
    autoCreatedAt: true,
    autoUpdatedAt: true,
    attributes: {
        name: {
            type: 'string',
            required: true,
            minLength: 4
        },
        email: {
            type: 'email',
            required: true,
            unique: true
        },
        password: {
            type: 'string',
            minLength: 6,
            required: true
        },
        toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        },
        formated_time: function(){
          formattedDate = moment( this.updatedAt ).format('hh:mma, MMMM Do, YYYY');
          return formattedDate;
        }
    },
    beforeCreate: function(user, cb) {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) {
                    console.log(err);
                    cb(err);
                } else {
                    user.password = hash;
                    cb();
                }
            });
        });
    },
    tableName: 'users'
};
