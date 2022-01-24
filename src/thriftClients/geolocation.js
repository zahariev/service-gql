const thrift = require("thrift");
const TGeoLocationService = require("../thrift/geolocation/TGeoLocationService");
const logger = require("../utils/logger");

const SERVER_HOST =
  process.env.SERVICE_GEO_LOCATION_HOST ||
  process.env.SERVICE_POST_CLUSTER_IP_SERVICE_SERVICE_HOST;
const SERVER_PORT = parseInt(process.env.SERVICE_GEO_LOCATION_PORT);

logger.info(`geolocationClient: ${SERVER_HOST} ${SERVER_PORT}`);

const thriftOptions = {
  transport: thrift.TBufferedTransport,
  protocol: thrift.TCompactProtocol,
};

const connection = thrift.createConnection(
  SERVER_HOST,
  SERVER_PORT,
  thriftOptions
);
let client;

connection.on("error", (err) => {
  logger.error(`geolocationClient: ${JSON.stringify(err)}`);
});

connection.on("connect", () => {
  client = thrift.createClient(TGeoLocationService, connection);
  logger.info("geolocationClient: Connected to thrift server!");
});

connection.on("close", () => {
  logger.info("geolocationClient: Disconnected from thrift server!");
  // process.exit(1);
});

process.on("SIGTERM", connection.end);

/**
 * thrift user client
 * @param {string} func thrift function to call
 * @param {object[]} params params to pass to the thrift function
 */
const geolocationClient = (func, params) =>
  new Promise((resolve, reject) => {
    client[func](...params)
      .then(resolve)
      .fail(reject);
  });
// Apache uses 'Q' promise library
// See https://issues.apache.org/jira/browse/THRIFT-2376

module.exports = geolocationClient;
