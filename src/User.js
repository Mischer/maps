"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var faker = require("faker");
var User = /** @class */ (function () {
    function User() {
        this.color = 'red';
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }
    User.prototype.markerContent = function () {
        return "User name: ".concat(this.name);
    };
    return User;
}());
exports.User = User;
