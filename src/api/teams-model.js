'use strict';

const Model = require('./model');
const teamSchema = require('./teams-schema');

/** 
 * Class representing a Team.
 * @extends Model
 */
class Teams extends Model {}


module.exports = new Teams(teamSchema);


