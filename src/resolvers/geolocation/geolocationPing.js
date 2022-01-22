const geolocationClient = require("../../thriftClients/geolocation");

module.exports = async () => {
  try {
    const { vin, dongle_id } = await geolocationClient("ping", []);
    return { vin, dongle_id };
  } catch (e) {
    throw e;
  }
};
