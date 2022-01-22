namespace go post
namespace js post

typedef double Float

struct GeoResponse {
  1: optional string vin
  2: optional string dongleId
  3: optional double lat
  4: optional double long
  5: optional double hdop
  6: optional double precision
  7: optional double heading
  8: optional double altitude
  9: optional double speed
  10: optional double source
  11: optional double info
  12: optional date time
}

service TGeolocationService {
  GeoResponse getGeolocation(),
}
