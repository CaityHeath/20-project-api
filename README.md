![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Ha-API an authenticated API
### Author: Caity Heath and Jacob Anderson

### Links and Resources
* [repo](https://github.com/CaityHeath/20-project-api)
* [![Build Status](https://www.travis-ci.com/CaityHeath/20-project-api.svg?branch=master)](https://www.travis-ci.com/CaityHeath/20-project-api)
* [back-end](https://ha-api.herokuapp.com/) 



#### Endpoints
* `/api/v1/:model/:id` GET, POST, DELETE
* `/api/v1/:model` GET, POST
* `/signup` POST
* `/signin` POST

#### Modules
##### `models.js` 
Constructs class according to the schema that is passed as an argument. 

##### `500.js`
A middleware module that catches server errors and displays a 500 status message. 

##### `404.js`
A middleware module that catches routing errors and displays a 404 status message. 

##### `model-finder.js`
Evaluates req.params.model (i.e. /api/v1/:model/) and returns an instance of the specified model. Because node require is cached, the instance will only be created once, no matter how many times a model is called. In the event the model is not found, node will throw a "MODULE_NOT_FOUND" error which the error middleware in the server will pick up.

#####  `router.js`
Routes all of the endpoints to thier associated middleware and callback functions. 

##### `api-router.js`
Routes which integrate with various models through a common Interface (.get(), .post(), .put(), .delete())

##### `players-model.js`
Class which represents a player. 

##### `teams-model.js`
Class which represents a team. 

##### `players-schema.js`
Schema used to format player data to be inserted into a mongo database. 

##### `teams-schema.js` 
Schema used to format team data to be inserted into a mongo database. 


#### Tests
* `npm test` runs the the test
* Asserts that all endpoints are reachable and deliver expected results
* Assert authentication of user signup and signin are functional and predictable.
