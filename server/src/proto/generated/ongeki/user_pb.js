// source: ongeki/user.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

var ongeki_playlog_pb = require('../ongeki/playlog_pb.js');
goog.object.extend(proto, ongeki_playlog_pb);
goog.exportSymbol('proto.mythos.ongeki.v0.GetPlaylogRequest', null, global);
goog.exportSymbol('proto.mythos.ongeki.v0.GetPlaylogStreamItem', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mythos.ongeki.v0.GetPlaylogRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mythos.ongeki.v0.GetPlaylogRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mythos.ongeki.v0.GetPlaylogRequest.displayName = 'proto.mythos.ongeki.v0.GetPlaylogRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mythos.ongeki.v0.GetPlaylogStreamItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mythos.ongeki.v0.GetPlaylogStreamItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mythos.ongeki.v0.GetPlaylogStreamItem.displayName = 'proto.mythos.ongeki.v0.GetPlaylogStreamItem';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mythos.ongeki.v0.GetPlaylogRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mythos.ongeki.v0.GetPlaylogRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mythos.ongeki.v0.GetPlaylogRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mythos.ongeki.v0.GetPlaylogRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    profileApiId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    lastUserPlayDate: jspb.Message.getFieldWithDefault(msg, 2, ""),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mythos.ongeki.v0.GetPlaylogRequest}
 */
proto.mythos.ongeki.v0.GetPlaylogRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mythos.ongeki.v0.GetPlaylogRequest;
  return proto.mythos.ongeki.v0.GetPlaylogRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mythos.ongeki.v0.GetPlaylogRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mythos.ongeki.v0.GetPlaylogRequest}
 */
proto.mythos.ongeki.v0.GetPlaylogRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileApiId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastUserPlayDate(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mythos.ongeki.v0.GetPlaylogRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mythos.ongeki.v0.GetPlaylogRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mythos.ongeki.v0.GetPlaylogRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mythos.ongeki.v0.GetPlaylogRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfileApiId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional string profile_api_id = 1;
 * @return {string}
 */
proto.mythos.ongeki.v0.GetPlaylogRequest.prototype.getProfileApiId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mythos.ongeki.v0.GetPlaylogRequest} returns this
 */
proto.mythos.ongeki.v0.GetPlaylogRequest.prototype.setProfileApiId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string last_user_play_date = 2;
 * @return {string}
 */
proto.mythos.ongeki.v0.GetPlaylogRequest.prototype.getLastUserPlayDate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mythos.ongeki.v0.GetPlaylogRequest} returns this
 */
proto.mythos.ongeki.v0.GetPlaylogRequest.prototype.setLastUserPlayDate = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mythos.ongeki.v0.GetPlaylogRequest} returns this
 */
proto.mythos.ongeki.v0.GetPlaylogRequest.prototype.clearLastUserPlayDate = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mythos.ongeki.v0.GetPlaylogRequest.prototype.hasLastUserPlayDate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 limit = 3;
 * @return {number}
 */
proto.mythos.ongeki.v0.GetPlaylogRequest.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.mythos.ongeki.v0.GetPlaylogRequest} returns this
 */
proto.mythos.ongeki.v0.GetPlaylogRequest.prototype.setLimit = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.mythos.ongeki.v0.GetPlaylogRequest} returns this
 */
proto.mythos.ongeki.v0.GetPlaylogRequest.prototype.clearLimit = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mythos.ongeki.v0.GetPlaylogRequest.prototype.hasLimit = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mythos.ongeki.v0.GetPlaylogStreamItem.prototype.toObject = function(opt_includeInstance) {
  return proto.mythos.ongeki.v0.GetPlaylogStreamItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mythos.ongeki.v0.GetPlaylogStreamItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mythos.ongeki.v0.GetPlaylogStreamItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    playlogApiId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    info: (f = msg.getInfo()) && ongeki_playlog_pb.PlaylogInfo.toObject(includeInstance, f),
    judge: (f = msg.getJudge()) && ongeki_playlog_pb.PlaylogJudge.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mythos.ongeki.v0.GetPlaylogStreamItem}
 */
proto.mythos.ongeki.v0.GetPlaylogStreamItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mythos.ongeki.v0.GetPlaylogStreamItem;
  return proto.mythos.ongeki.v0.GetPlaylogStreamItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mythos.ongeki.v0.GetPlaylogStreamItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mythos.ongeki.v0.GetPlaylogStreamItem}
 */
proto.mythos.ongeki.v0.GetPlaylogStreamItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlaylogApiId(value);
      break;
    case 2:
      var value = new ongeki_playlog_pb.PlaylogInfo;
      reader.readMessage(value,ongeki_playlog_pb.PlaylogInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    case 3:
      var value = new ongeki_playlog_pb.PlaylogJudge;
      reader.readMessage(value,ongeki_playlog_pb.PlaylogJudge.deserializeBinaryFromReader);
      msg.setJudge(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mythos.ongeki.v0.GetPlaylogStreamItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mythos.ongeki.v0.GetPlaylogStreamItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mythos.ongeki.v0.GetPlaylogStreamItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mythos.ongeki.v0.GetPlaylogStreamItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlaylogApiId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      ongeki_playlog_pb.PlaylogInfo.serializeBinaryToWriter
    );
  }
  f = message.getJudge();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      ongeki_playlog_pb.PlaylogJudge.serializeBinaryToWriter
    );
  }
};


/**
 * optional string playlog_api_id = 1;
 * @return {string}
 */
proto.mythos.ongeki.v0.GetPlaylogStreamItem.prototype.getPlaylogApiId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mythos.ongeki.v0.GetPlaylogStreamItem} returns this
 */
proto.mythos.ongeki.v0.GetPlaylogStreamItem.prototype.setPlaylogApiId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PlaylogInfo info = 2;
 * @return {?proto.mythos.ongeki.v0.PlaylogInfo}
 */
proto.mythos.ongeki.v0.GetPlaylogStreamItem.prototype.getInfo = function() {
  return /** @type{?proto.mythos.ongeki.v0.PlaylogInfo} */ (
    jspb.Message.getWrapperField(this, ongeki_playlog_pb.PlaylogInfo, 2));
};


/**
 * @param {?proto.mythos.ongeki.v0.PlaylogInfo|undefined} value
 * @return {!proto.mythos.ongeki.v0.GetPlaylogStreamItem} returns this
*/
proto.mythos.ongeki.v0.GetPlaylogStreamItem.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mythos.ongeki.v0.GetPlaylogStreamItem} returns this
 */
proto.mythos.ongeki.v0.GetPlaylogStreamItem.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mythos.ongeki.v0.GetPlaylogStreamItem.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PlaylogJudge judge = 3;
 * @return {?proto.mythos.ongeki.v0.PlaylogJudge}
 */
proto.mythos.ongeki.v0.GetPlaylogStreamItem.prototype.getJudge = function() {
  return /** @type{?proto.mythos.ongeki.v0.PlaylogJudge} */ (
    jspb.Message.getWrapperField(this, ongeki_playlog_pb.PlaylogJudge, 3));
};


/**
 * @param {?proto.mythos.ongeki.v0.PlaylogJudge|undefined} value
 * @return {!proto.mythos.ongeki.v0.GetPlaylogStreamItem} returns this
*/
proto.mythos.ongeki.v0.GetPlaylogStreamItem.prototype.setJudge = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mythos.ongeki.v0.GetPlaylogStreamItem} returns this
 */
proto.mythos.ongeki.v0.GetPlaylogStreamItem.prototype.clearJudge = function() {
  return this.setJudge(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mythos.ongeki.v0.GetPlaylogStreamItem.prototype.hasJudge = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.mythos.ongeki.v0);
