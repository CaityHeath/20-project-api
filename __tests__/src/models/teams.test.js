'use strict';

const teams = require(`../../../src/api/teams-model`);

const supergoose = require('../../supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Teams Model', () => {
  it('can post() a new team', () => {
    let obj = {name:'Test Team'};
    return teams.post(obj)
      .then(record => {
        Object.keys(obj).forEach(key =>{
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a team', () => {
    let obj = {name:'Test Team'};
    console.log('posting a team', obj);
    return teams.post(obj)
      .then(record => {
        console.log('getting a team');
        return teams.get(record._id)
          .then(team => {
            console.log('testing a team', team);            
            Object.keys(obj).forEach(key =>{
              expect(team[0][key]).toEqual(obj[key]);
            });
          });
      });
  });
  
});