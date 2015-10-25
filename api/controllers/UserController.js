/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res) {
    User.find(function(err, users) {
      res.view({
        users: users
      });
    });
  },

  create: function (req, res) {
    User.create(req.body).exec(function(err, user) {
      console.log(req.body);
      if(err){
        res.send(err);
      }else{
        req.logIn(user, function(err) {
                if (err) res.send(err);
                return res.redirect('/');
            });
      }
    });
  }
};

