const _ = require('lodash');
const moment = require('moment');
const queryString = require('query-string');
const { v4: uuidv4 } = require('uuid');
const validator = require('validator');

class QuaintQuantumQueries {
  constructor(queryStringParams) {
    this.query = queryString.parse(queryStringParams);
    this.id = uuidv4();
  }

  validateQuery() {
    // Example validation
    if (!validator.isAlpha(this.query.filter)) {
      throw new Error('Invalid filter value');
    }
  }

  addTimestamp() {
    this.query.timestamp = moment().format();
  }

  generateQueryId() {
    return this.id;
  }

  getQueryString() {
    this.validateQuery();
    this.addTimestamp();
    return queryString.stringify(this.query);
  }
}

module.exports = QuaintQuantumQueries;
