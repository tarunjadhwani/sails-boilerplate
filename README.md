# Sails Boilerplate

This is a simple boiler plate developed in [sails.js](http://sailsjs.org/) that has all packages and configurations that are needed to start building a production level application.

### Version
0.0.1

### Tech

Sails Boilerplate uses the following technologies:

* [node.js](https://nodejs.org/en/) - evented I/O for the backend
* [sails.js](http://sailsjs.org/) - webframework build over expressjs
* [mysql](https://www.mysql.com/) - opensource database

Note: The additional packages installed are mentioned at in a seperate section

### Installation

Below are the steps you need to follow for installation:

```sh
$ git clone git@github.com:tarunjadhwani/sails-boilerplate.git
$ cd sails-boilerplate
$ sudo npm install
```
For setting up the database in mysql

```sh
$ mysql -u root
$ CREATE DATABASE sails-boilerplate;
```

Update the config for database consumer application in the file present in
consumer-payments/config/connections.js

```sh
$ grunt db:migrate:up
$ sails lift
```

Sails-boilerplate is a sails app that runs of port 1337, so you can access the application on your http://localhost:1337 (on local machine)


### Testing

For testing we have used [jasmine](http://jasmine.github.io/2.0/introduction.html) with [karma](http://karma-runner.github.io/)

```sh
$ npm install -g karma-cli
$ karma start karma.conf.js
```


### Packages installed

* [jade](http://jade-lang.com/) - Templating engine for your sails app
* [moment.js](http://momentjs.com/) - Date-time formatting
* [sails-mysql](https://github.com/balderdashy/sails-mysql) - MySQL adapter for Sails.js
* [passport](http://passportjs.org/) - authentication middleware for Node.js
* [bcrypt](https://www.npmjs.com/package/bcrypt) - Password hashing
* [sails-db-migrate](https://github.com/building5/sails-db-migrate) - db-migrate integration for your sails app
* [winston](https://github.com/winstonjs/winston) - For logging on to a file (application.log in our case)
* [karma-jasmine](https://github.com/karma-runner/karma-jasmine) - For testing in jasmine with karma plugin
* [sails-hook-autoreload](https://github.com/sgress454/sails-hook-autoreload) - Sails JS hook to autoreload controllers, models and locales when changed.


