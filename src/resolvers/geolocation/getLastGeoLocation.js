const geolocationClient = require("../../thriftClients/geolocation");

module.exports = async () => {
  try {
    const res = await geolocationClient("getLastGeoLocation", { vin: 1 });
    return res;
  } catch (e) {
    throw e;
  }
};
