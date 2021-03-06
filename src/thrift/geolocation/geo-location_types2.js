//
// Autogenerated by Thrift Compiler (0.13.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//

var thrift = require("thrift");
var Thrift = thrift.Thrift;

if (typeof Int64 === "undefined" && typeof require === "function") {
  var Int64 = require("node-int64");
}

var ttypes = (module.exports = {});
var TGeoLocationException = (module.exports.PingResponse = function (args) {
  this.id = null;
  this.message = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.message !== undefined && args.message !== null) {
      this.message = args.message;
    }
  }
});
Thrift.inherits(TGeoLocationException, Thrift.TException);
TGeoLocationException.prototype.name = "TGeoLocationException";
TGeoLocationException.prototype.read = function (input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
        if (ftype == Thrift.Type.I32) {
          this.id = input.readI32().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 2:
        if (ftype == Thrift.Type.STRING) {
          this.message = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TGeoLocationException.prototype.write = function (output) {
  output.writeStructBegin("TGeoLocationException");
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin("id", Thrift.Type.I32, 1);
    output.writeI32(this.id);
    output.writeFieldEnd();
  }
  if (this.message !== null && this.message !== undefined) {
    output.writeFieldBegin("message", Thrift.Type.STRING, 2);
    output.writeString(this.message);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var TGeoCoordinate = function (args) {
  this.vin = null;
  this.dongleId = null;
  this.lat = null;
  this.lng = null;
  this.hdop = null;
  this.precision = null;
  this.heading = null;
  this.altitude = null;
  this.speed = null;
  this.source = null;
  this.info = null;
  this.time = null;
  if (args) {
    if (args.vin !== undefined && args.vin !== null) {
      this.vin = args.vin;
    }
    if (args.dongleId !== undefined && args.dongleId !== null) {
      this.dongleId = args.dongleId;
    }
    if (args.lat !== undefined && args.lat !== null) {
      this.lat = args.lat;
    }
    if (args.lng !== undefined && args.lng !== null) {
      this.lng = args.lng;
    }
    if (args.hdop !== undefined && args.hdop !== null) {
      this.hdop = args.hdop;
    }
    if (args.precision !== undefined && args.precision !== null) {
      this.precision = args.precision;
    }
    if (args.heading !== undefined && args.heading !== null) {
      this.heading = args.heading;
    }
    if (args.altitude !== undefined && args.altitude !== null) {
      this.altitude = args.altitude;
    }
    if (args.speed !== undefined && args.speed !== null) {
      this.speed = args.speed;
    }
    if (args.source !== undefined && args.source !== null) {
      this.source = args.source;
    }
    if (args.info !== undefined && args.info !== null) {
      this.info = args.info;
    }
    if (args.time !== undefined && args.time !== null) {
      this.time = args.time;
    }
  }
};
TGeoCoordinate.prototype = {};
TGeoCoordinate.prototype.read = function (input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
        if (ftype == Thrift.Type.STRING) {
          this.vin = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 2:
        if (ftype == Thrift.Type.STRING) {
          this.dongleId = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 3:
        if (ftype == Thrift.Type.DOUBLE) {
          this.lat = input.readDouble().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 4:
        if (ftype == Thrift.Type.DOUBLE) {
          this.lng = input.readDouble().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 5:
        if (ftype == Thrift.Type.DOUBLE) {
          this.hdop = input.readDouble().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 6:
        if (ftype == Thrift.Type.DOUBLE) {
          this.precision = input.readDouble().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 7:
        if (ftype == Thrift.Type.DOUBLE) {
          this.heading = input.readDouble().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 8:
        if (ftype == Thrift.Type.DOUBLE) {
          this.altitude = input.readDouble().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 9:
        if (ftype == Thrift.Type.DOUBLE) {
          this.speed = input.readDouble().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 10:
        if (ftype == Thrift.Type.DOUBLE) {
          this.source = input.readDouble().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 11:
        if (ftype == Thrift.Type.DOUBLE) {
          this.info = input.readDouble().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 12:
        if (ftype == Thrift.Type.I64) {
          this.time = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TGeoCoordinate.prototype.write = function (output) {
  output.writeStructBegin("TGeoCoordinate");
  if (this.vin !== null && this.vin !== undefined) {
    output.writeFieldBegin("vin", Thrift.Type.STRING, 1);
    output.writeString(this.vin);
    output.writeFieldEnd();
  }
  if (this.dongleId !== null && this.dongleId !== undefined) {
    output.writeFieldBegin("dongleId", Thrift.Type.STRING, 2);
    output.writeString(this.dongleId);
    output.writeFieldEnd();
  }
  if (this.lat !== null && this.lat !== undefined) {
    output.writeFieldBegin("lat", Thrift.Type.DOUBLE, 3);
    output.writeDouble(this.lat);
    output.writeFieldEnd();
  }
  if (this.lng !== null && this.lng !== undefined) {
    output.writeFieldBegin("lng", Thrift.Type.DOUBLE, 4);
    output.writeDouble(this.lng);
    output.writeFieldEnd();
  }
  if (this.hdop !== null && this.hdop !== undefined) {
    output.writeFieldBegin("hdop", Thrift.Type.DOUBLE, 5);
    output.writeDouble(this.hdop);
    output.writeFieldEnd();
  }
  if (this.precision !== null && this.precision !== undefined) {
    output.writeFieldBegin("precision", Thrift.Type.DOUBLE, 6);
    output.writeDouble(this.precision);
    output.writeFieldEnd();
  }
  if (this.heading !== null && this.heading !== undefined) {
    output.writeFieldBegin("heading", Thrift.Type.DOUBLE, 7);
    output.writeDouble(this.heading);
    output.writeFieldEnd();
  }
  if (this.altitude !== null && this.altitude !== undefined) {
    output.writeFieldBegin("altitude", Thrift.Type.DOUBLE, 8);
    output.writeDouble(this.altitude);
    output.writeFieldEnd();
  }
  if (this.speed !== null && this.speed !== undefined) {
    output.writeFieldBegin("speed", Thrift.Type.DOUBLE, 9);
    output.writeDouble(this.speed);
    output.writeFieldEnd();
  }
  if (this.source !== null && this.source !== undefined) {
    output.writeFieldBegin("source", Thrift.Type.DOUBLE, 10);
    output.writeDouble(this.source);
    output.writeFieldEnd();
  }
  if (this.info !== null && this.info !== undefined) {
    output.writeFieldBegin("info", Thrift.Type.DOUBLE, 11);
    output.writeDouble(this.info);
    output.writeFieldEnd();
  }
  if (this.time !== null && this.time !== undefined) {
    output.writeFieldBegin("time", Thrift.Type.I64, 12);
    output.writeI64(this.time);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

TGeofenceRq = function (args) {
  this.label = null;
  this.description = null;
  this.circle = null;
  this.polygon = null;
  if (args) {
    if (args.label !== undefined && args.label !== null) {
      this.label = args.label;
    }
    if (args.description !== undefined && args.description !== null) {
      this.description = args.description;
    }
    if (args.circle !== undefined && args.circle !== null) {
      this.circle = new TCircleRq(args.circle);
    }
    if (args.polygon !== undefined && args.polygon !== null) {
      this.polygon = new TPolygonRq(args.polygon);
    }
  }
};
TGeofenceRq.prototype = {};
TGeofenceRq.prototype.read = function (input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
        if (ftype == Thrift.Type.STRING) {
          this.label = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 2:
        if (ftype == Thrift.Type.STRING) {
          this.description = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 3:
        if (ftype == Thrift.Type.STRUCT) {
          this.circle = new TCircleRq();
          this.circle.read(input);
        } else {
          input.skip(ftype);
        }
        break;
      case 4:
        if (ftype == Thrift.Type.STRUCT) {
          this.polygon = new TPolygonRq();
          this.polygon.read(input);
        } else {
          input.skip(ftype);
        }
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TGeofenceRq.prototype.write = function (output) {
  output.writeStructBegin("TGeofenceRq");
  if (this.label !== null && this.label !== undefined) {
    output.writeFieldBegin("label", Thrift.Type.STRING, 1);
    output.writeString(this.label);
    output.writeFieldEnd();
  }
  if (this.description !== null && this.description !== undefined) {
    output.writeFieldBegin("description", Thrift.Type.STRING, 2);
    output.writeString(this.description);
    output.writeFieldEnd();
  }
  if (this.circle !== null && this.circle !== undefined) {
    output.writeFieldBegin("circle", Thrift.Type.STRUCT, 3);
    this.circle.write(output);
    output.writeFieldEnd();
  }
  if (this.polygon !== null && this.polygon !== undefined) {
    output.writeFieldBegin("polygon", Thrift.Type.STRUCT, 4);
    this.polygon.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var TCircleRq = function (args) {
  this.radius = null;
  this.lat = null;
  this.lng = null;
  this.address = null;
  this.color = null;
  if (args) {
    if (args.radius !== undefined && args.radius !== null) {
      this.radius = args.radius;
    }
    if (args.lat !== undefined && args.lat !== null) {
      this.lat = args.lat;
    }
    if (args.lng !== undefined && args.lng !== null) {
      this.lng = args.lng;
    }
    if (args.address !== undefined && args.address !== null) {
      this.address = args.address;
    }
    if (args.color !== undefined && args.color !== null) {
      this.color = args.color;
    }
  }
};
TCircleRq.prototype = {};
TCircleRq.prototype.read = function (input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
        if (ftype == Thrift.Type.DOUBLE) {
          this.radius = input.readDouble().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 2:
        if (ftype == Thrift.Type.DOUBLE) {
          this.lat = input.readDouble().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 3:
        if (ftype == Thrift.Type.DOUBLE) {
          this.lng = input.readDouble().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 4:
        if (ftype == Thrift.Type.STRING) {
          this.address = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 5:
        if (ftype == Thrift.Type.STRING) {
          this.color = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TCircleRq.prototype.write = function (output) {
  output.writeStructBegin("TCircleRq");
  if (this.radius !== null && this.radius !== undefined) {
    output.writeFieldBegin("radius", Thrift.Type.DOUBLE, 1);
    output.writeDouble(this.radius);
    output.writeFieldEnd();
  }
  if (this.lat !== null && this.lat !== undefined) {
    output.writeFieldBegin("lat", Thrift.Type.DOUBLE, 2);
    output.writeDouble(this.lat);
    output.writeFieldEnd();
  }
  if (this.lng !== null && this.lng !== undefined) {
    output.writeFieldBegin("lng", Thrift.Type.DOUBLE, 3);
    output.writeDouble(this.lng);
    output.writeFieldEnd();
  }
  if (this.address !== null && this.address !== undefined) {
    output.writeFieldBegin("address", Thrift.Type.STRING, 4);
    output.writeString(this.address);
    output.writeFieldEnd();
  }
  if (this.color !== null && this.color !== undefined) {
    output.writeFieldBegin("color", Thrift.Type.STRING, 5);
    output.writeString(this.color);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var TPolygonRq = function (args) {
  this.color = null;
  this.point = null;
  if (args) {
    if (args.color !== undefined && args.color !== null) {
      this.color = args.color;
    }
    if (args.point !== undefined && args.point !== null) {
      this.point = Thrift.copyList(args.point, [null]);
    }
  }
};
TPolygonRq.prototype = {};
TPolygonRq.prototype.read = function (input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
        if (ftype == Thrift.Type.STRING) {
          this.color = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 2:
        if (ftype == Thrift.Type.LIST) {
          this.point = [];
          var _rtmp31 = input.readListBegin();
          var _size0 = _rtmp31.size || 0;
          for (var _i2 = 0; _i2 < _size0; ++_i2) {
            var elem3 = null;
            elem3 = new TPointRq();
            elem3.read(input);
            this.point.push(elem3);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TPolygonRq.prototype.write = function (output) {
  output.writeStructBegin("TPolygonRq");
  if (this.color !== null && this.color !== undefined) {
    output.writeFieldBegin("color", Thrift.Type.STRING, 1);
    output.writeString(this.color);
    output.writeFieldEnd();
  }
  if (this.point !== null && this.point !== undefined) {
    output.writeFieldBegin("point", Thrift.Type.LIST, 2);
    output.writeListBegin(Thrift.Type.STRUCT, this.point.length);
    for (var iter4 in this.point) {
      if (this.point.hasOwnProperty(iter4)) {
        iter4 = this.point[iter4];
        iter4.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var TPointRq = function (args) {
  this.lat = null;
  this.lng = null;
  if (args) {
    if (args.lat !== undefined && args.lat !== null) {
      this.lat = args.lat;
    }
    if (args.lng !== undefined && args.lng !== null) {
      this.lng = args.lng;
    }
  }
};
TPointRq.prototype = {};
TPointRq.prototype.read = function (input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
        if (ftype == Thrift.Type.DOUBLE) {
          this.lat = input.readDouble().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 2:
        if (ftype == Thrift.Type.DOUBLE) {
          this.lng = input.readDouble().value;
        } else {
          input.skip(ftype);
        }
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TPointRq.prototype.write = function (output) {
  output.writeStructBegin("TPointRq");
  if (this.lat !== null && this.lat !== undefined) {
    output.writeFieldBegin("lat", Thrift.Type.DOUBLE, 1);
    output.writeDouble(this.lat);
    output.writeFieldEnd();
  }
  if (this.lng !== null && this.lng !== undefined) {
    output.writeFieldBegin("lng", Thrift.Type.DOUBLE, 2);
    output.writeDouble(this.lng);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var TGeofence = function (args) {
  this.id = null;
  this.label = null;
  this.description = null;
  this.circle = null;
  this.polygon = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.label !== undefined && args.label !== null) {
      this.label = args.label;
    }
    if (args.description !== undefined && args.description !== null) {
      this.description = args.description;
    }
    if (args.circle !== undefined && args.circle !== null) {
      this.circle = new TCircle(args.circle);
    }
    if (args.polygon !== undefined && args.polygon !== null) {
      this.polygon = new TPolygon(args.polygon);
    }
  }
};
TGeofence.prototype = {};
TGeofence.prototype.read = function (input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
        if (ftype == Thrift.Type.I64) {
          this.id = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 2:
        if (ftype == Thrift.Type.STRING) {
          this.label = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 3:
        if (ftype == Thrift.Type.STRING) {
          this.description = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 4:
        if (ftype == Thrift.Type.STRUCT) {
          this.circle = new TCircle();
          this.circle.read(input);
        } else {
          input.skip(ftype);
        }
        break;
      case 5:
        if (ftype == Thrift.Type.STRUCT) {
          this.polygon = new TPolygon();
          this.polygon.read(input);
        } else {
          input.skip(ftype);
        }
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TGeofence.prototype.write = function (output) {
  output.writeStructBegin("TGeofence");
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin("id", Thrift.Type.I64, 1);
    output.writeI64(this.id);
    output.writeFieldEnd();
  }
  if (this.label !== null && this.label !== undefined) {
    output.writeFieldBegin("label", Thrift.Type.STRING, 2);
    output.writeString(this.label);
    output.writeFieldEnd();
  }
  if (this.description !== null && this.description !== undefined) {
    output.writeFieldBegin("description", Thrift.Type.STRING, 3);
    output.writeString(this.description);
    output.writeFieldEnd();
  }
  if (this.circle !== null && this.circle !== undefined) {
    output.writeFieldBegin("circle", Thrift.Type.STRUCT, 4);
    this.circle.write(output);
    output.writeFieldEnd();
  }
  if (this.polygon !== null && this.polygon !== undefined) {
    output.writeFieldBegin("polygon", Thrift.Type.STRUCT, 5);
    this.polygon.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var TCircle = function (args) {
  this.id = null;
  this.radius = null;
  this.lat = null;
  this.lng = null;
  this.address = null;
  this.color = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.radius !== undefined && args.radius !== null) {
      this.radius = args.radius;
    }
    if (args.lat !== undefined && args.lat !== null) {
      this.lat = args.lat;
    }
    if (args.lng !== undefined && args.lng !== null) {
      this.lng = args.lng;
    }
    if (args.address !== undefined && args.address !== null) {
      this.address = args.address;
    }
    if (args.color !== undefined && args.color !== null) {
      this.color = args.color;
    }
  }
};
TCircle.prototype = {};
TCircle.prototype.read = function (input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
        if (ftype == Thrift.Type.I64) {
          this.id = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 2:
        if (ftype == Thrift.Type.DOUBLE) {
          this.radius = input.readDouble().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 3:
        if (ftype == Thrift.Type.DOUBLE) {
          this.lat = input.readDouble().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 4:
        if (ftype == Thrift.Type.DOUBLE) {
          this.lng = input.readDouble().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 5:
        if (ftype == Thrift.Type.STRING) {
          this.address = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 6:
        if (ftype == Thrift.Type.STRING) {
          this.color = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TCircle.prototype.write = function (output) {
  output.writeStructBegin("TCircle");
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin("id", Thrift.Type.I64, 1);
    output.writeI64(this.id);
    output.writeFieldEnd();
  }
  if (this.radius !== null && this.radius !== undefined) {
    output.writeFieldBegin("radius", Thrift.Type.DOUBLE, 2);
    output.writeDouble(this.radius);
    output.writeFieldEnd();
  }
  if (this.lat !== null && this.lat !== undefined) {
    output.writeFieldBegin("lat", Thrift.Type.DOUBLE, 3);
    output.writeDouble(this.lat);
    output.writeFieldEnd();
  }
  if (this.lng !== null && this.lng !== undefined) {
    output.writeFieldBegin("lng", Thrift.Type.DOUBLE, 4);
    output.writeDouble(this.lng);
    output.writeFieldEnd();
  }
  if (this.address !== null && this.address !== undefined) {
    output.writeFieldBegin("address", Thrift.Type.STRING, 5);
    output.writeString(this.address);
    output.writeFieldEnd();
  }
  if (this.color !== null && this.color !== undefined) {
    output.writeFieldBegin("color", Thrift.Type.STRING, 6);
    output.writeString(this.color);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var TPolygon = function (args) {
  this.id = null;
  this.color = null;
  this.point = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.color !== undefined && args.color !== null) {
      this.color = args.color;
    }
    if (args.point !== undefined && args.point !== null) {
      this.point = Thrift.copyList(args.point, [null]);
    }
  }
};
TPolygon.prototype = {};
TPolygon.prototype.read = function (input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
        if (ftype == Thrift.Type.I64) {
          this.id = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 2:
        if (ftype == Thrift.Type.STRING) {
          this.color = input.readString().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 3:
        if (ftype == Thrift.Type.LIST) {
          this.point = [];
          var _rtmp36 = input.readListBegin();
          var _size5 = _rtmp36.size || 0;
          for (var _i7 = 0; _i7 < _size5; ++_i7) {
            var elem8 = null;
            elem8 = new TPoint();
            elem8.read(input);
            this.point.push(elem8);
          }
          input.readListEnd();
        } else {
          input.skip(ftype);
        }
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TPolygon.prototype.write = function (output) {
  output.writeStructBegin("TPolygon");
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin("id", Thrift.Type.I64, 1);
    output.writeI64(this.id);
    output.writeFieldEnd();
  }
  if (this.color !== null && this.color !== undefined) {
    output.writeFieldBegin("color", Thrift.Type.STRING, 2);
    output.writeString(this.color);
    output.writeFieldEnd();
  }
  if (this.point !== null && this.point !== undefined) {
    output.writeFieldBegin("point", Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRUCT, this.point.length);
    for (var iter9 in this.point) {
      if (this.point.hasOwnProperty(iter9)) {
        iter9 = this.point[iter9];
        iter9.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var TPoint = function (args) {
  this.id = null;
  this.lat = null;
  this.lng = null;
  if (args) {
    if (args.id !== undefined && args.id !== null) {
      this.id = args.id;
    }
    if (args.lat !== undefined && args.lat !== null) {
      this.lat = args.lat;
    }
    if (args.lng !== undefined && args.lng !== null) {
      this.lng = args.lng;
    }
  }
};
TPoint.prototype = {};
TPoint.prototype.read = function (input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
        if (ftype == Thrift.Type.I64) {
          this.id = input.readI64().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 2:
        if (ftype == Thrift.Type.DOUBLE) {
          this.lat = input.readDouble().value;
        } else {
          input.skip(ftype);
        }
        break;
      case 3:
        if (ftype == Thrift.Type.DOUBLE) {
          this.lng = input.readDouble().value;
        } else {
          input.skip(ftype);
        }
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

TPoint.prototype.write = function (output) {
  output.writeStructBegin("TPoint");
  if (this.id !== null && this.id !== undefined) {
    output.writeFieldBegin("id", Thrift.Type.I64, 1);
    output.writeI64(this.id);
    output.writeFieldEnd();
  }
  if (this.lat !== null && this.lat !== undefined) {
    output.writeFieldBegin("lat", Thrift.Type.DOUBLE, 2);
    output.writeDouble(this.lat);
    output.writeFieldEnd();
  }
  if (this.lng !== null && this.lng !== undefined) {
    output.writeFieldBegin("lng", Thrift.Type.DOUBLE, 3);
    output.writeDouble(this.lng);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};
