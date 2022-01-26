const { gql } = require("apollo-server-express");
// const user = require("./user");
// const post = require("./post");

const geolocation = require("./geolocation");

const base = gql`
  type PingResponse {
    message: String
    _version: Int
  }

  type GeoResponse {
    vin: String
    dongleId: Int
  }

  type Query {
    ping: PingResponse!
  }
`;

module.exports = [base, geolocation]; // user, post,
