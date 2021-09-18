"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var sha256_1 = __importDefault(require("sha256"));
var md5_1 = __importDefault(require("md5"));
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.prototype.generateHash = function (text, type) {
        switch (type) {
            case "md5":
                return (0, md5_1["default"])(text);
            case "sha256":
                return (0, sha256_1["default"])(text);
            default:
                throw new Error("Unknown type");
        }
    };
    return Utils;
}());
exports["default"] = new Utils();
