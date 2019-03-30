"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var https = __importStar(require("https"));
var querystring = __importStar(require("querystring"));
var Http = /** @class */ (function () {
    function Http(token) {
        this.headers = {};
        this.token = token;
        this.headers["Ocp-Apim-Subscription-Key"] = token;
        this.headers["Accept"] = "application/json";
        this.headers["User-Agent"] = "node-ns-api - https://github.com/MichielMag/node-ns-api";
    }
    Http.prototype.get = function (url, params, contentType) {
        var subject = new rxjs_1.Subject();
        var query = querystring.stringify(params);
        var uri = url;
        if (query !== null && query.length > 0) {
            url += "?" + query;
        }
        var headers = this.headers;
        if (contentType !== undefined && contentType !== null) {
            headers["Accept"] = contentType;
        }
        var request = https.get(url, { headers: headers }, function (res) {
            var json = "";
            res.on('data', function (data) {
                json += data;
            });
            res.on('end', function () {
                var obj = JSON.parse(json);
                if (obj.errors !== undefined) {
                    subject.error(obj);
                }
                else {
                    subject.next(JSON.parse(json));
                }
            });
            res.on('error', function (err) {
                subject.error(err);
            });
        });
        request.on('error', function (err) {
            subject.error(err);
        });
        return subject;
    };
    return Http;
}());
exports.Http = Http;
