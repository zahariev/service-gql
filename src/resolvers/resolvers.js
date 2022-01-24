const _ = require("lodash");
// const user = require("./user/user");
// const post = require("./post/post");
const geo = require("./geolocation/geolocation");

const base = {
  Query: {
    ping: () => ({ message: 1111, _version: 1 }),
  },
};

module.exports = _.merge(base, geo); // user, post,
