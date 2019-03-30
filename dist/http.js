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
        this.OCP_APIM_SUBSCRIPTION_KEY = 'Ocp-Apim-Subscription-Key';
        this.ACCEPT = 'Accept';
        this.USER_AGENT = 'User-Agent';
        this.APPLICATION_JSON = 'application/json';
        this.USER_AGENT_VALUE = 'node-ns-api - https://github.com/MichielMag/node-ns-api';
        this.token = token;
        this.headers[this.OCP_APIM_SUBSCRIPTION_KEY] = token;
        this.headers[this.ACCEPT] = this.APPLICATION_JSON;
        this.headers[this.USER_AGENT] = this.USER_AGENT_VALUE;
    }
    Http.prototype.get = function (url, params, contentType) {
        var subject = new rxjs_1.Subject();
        var query = querystring.stringify(params);
        var uri = url;
        if (query !== null && query.length > 0) {
            uri += '?' + query;
        }
        var requestHeaders = this.headers;
        if (contentType !== undefined && contentType !== null) {
            requestHeaders[this.ACCEPT] = contentType;
        }
        var request = https.get(url, { headers: requestHeaders }, function (res) {
            var json = '';
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
