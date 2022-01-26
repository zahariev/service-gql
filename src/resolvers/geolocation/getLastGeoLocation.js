const geolocationClient = require("../../thriftClients/geolocation");

module.exports = async () => {
  try {
    const { vin, dongleId } = await geolocationClient("getLastGeoLocation", []);
    return { vin, dongleId };
  } catch (e) {
    throw e;
  }
};
