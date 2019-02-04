'use strict';

const express = require('express');
const authRouter = express.Router();

const User = require('./users-model.js');
const Roles = require('./roles-model.js');
const auth = require('./middleware.js');
const oauth = require('./oauth/google.js');

authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save()
    .then( (user) => {
      User.findOne({_id: user._id})
        .then(user => {
          //console.log('user: ',user);
          req.token = user.generateToken();
          req.user = user;
          res.set('token', req.token);
          res.cookie('auth', req.token);
          res.send(req.token);
        });
    })
    .catch(next);
});

authRouter.post('/role', (req, res, next) => {
  let role = new Roles(req.body);
  role.save()
    .then( (role) => {
      Roles.findOne({role: role.role})
        .then(role => {
          req.role = role;
          res.send(req.role);
        });
    })
    .catch(next);
});

authRouter.post('/signin', auth(), (req, res, next) => {
  res.cookie('auth', req.token);
  res.send(req.token);
});


authRouter.get('/oauth', (req,res,next) => {
  oauth.authorize(req)
    .then( token => {
      res.status(200).send(token);
    })
    .catch(next);
});

authRouter.post('/key', auth, (req,res,next) => {
  let key = req.user.generateKey();
  res.status(200).send(key);
});

authRouter.post('/secret', auth('read'), (req, res, next) => {
  res.status(200).send('you are authorized');
});

module.exports = authRouter;
