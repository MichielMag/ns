"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("./http");
var API = /** @class */ (function () {
    function API(token) {
        this.token = '';
        this.ALLSTATIONSURL = 'https://gateway.apiportal.ns.nl/public-reisinformatie/api/v2/stations';
        this.ARRIVALSURL = 'https://gateway.apiportal.ns.nl/public-reisinformatie/api/v2/arrivals';
        this.DEPARTURESURL = 'https://gateway.apiportal.ns.nl/public-reisinformatie/api/v2/departures';
        this.BIGDEPARTURESURL = 'https://gateway.apiportal.ns.nl/public-reisinformatie/api/v2/departures/big';
        this.DISRUPTIONURL = 'https://gateway.apiportal.ns.nl/public-reisinformatie/api/v2/disruptions/';
        this.DISRUPTIONSURL = 'https://gateway.apiportal.ns.nl/public-reisinformatie/api/v2/disruptions';
        this.STATIONDISRUPTIONURL = 'https://gateway.apiportal.ns.nl/public-reisinformatie/api/v2/disruptions/station/';
        this.TRIPURL = 'https://gateway.apiportal.ns.nl/public-reisinformatie/api/v3/trips/trip';
        this.TRIPSURL = 'https://gateway.apiportal.ns.nl/public-reisinformatie/api/v3/trips';
        this.token = token;
        this.http = new http_1.Http(token);
    }
    API.prototype.getAllStations = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.ALLSTATIONSURL, null).subscribe(function (message) {
                resolve(message.payload);
            }, function (error) {
                reject(error);
            });
        });
    };
    API.prototype.getArrivals = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.ARRIVALSURL, params).subscribe(function (message) {
                resolve(message.payload);
            }, function (error) {
                reject(error);
            });
        });
    };
    API.prototype.getDepartures = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.DEPARTURESURL, params).subscribe(function (message) {
                resolve(message.payload);
            }, function (error) {
                reject(error);
            });
        });
    };
    API.prototype.getBigDepartures = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.BIGDEPARTURESURL, params).subscribe(function (message) {
                resolve(message.payload);
            }, function (error) {
                reject(error);
            });
        });
    };
    API.prototype.getDisruption = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.DISRUPTIONURL + params.id, params).subscribe(function (message) {
                resolve(message.payload);
            }, function (error) {
                reject(error);
            });
        });
    };
    API.prototype.getDisruptions = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.DISRUPTIONSURL, params).subscribe(function (message) {
                resolve(message.payload);
            }, function (error) {
                reject(error);
            });
        });
    };
    API.prototype.getStationDisruption = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.STATIONDISRUPTIONURL + params.code, params).subscribe(function (message) {
                resolve(message.payload);
            }, function (error) {
                reject(error);
            });
        });
    };
    API.prototype.getTrip = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.TRIPURL, params).subscribe(function (message) {
                resolve(message.payload);
            }, function (error) {
                reject(error);
            });
        });
    };
    API.prototype.getTrips = function (params) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.TRIPSURL, params).subscribe(function (message) {
                resolve(message.payload);
            }, function (error) {
                reject(error);
            });
        });
    };
    return API;
}());
exports.API = API;
