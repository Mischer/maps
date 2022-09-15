"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
var faker = require("faker");
var Company = /** @class */ (function () {
    function Company() {
        this.color = 'red';
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        };
    }
    Company.prototype.markerContent = function () {
        return "<div>\n                    <h1>Company name: ".concat(this.name, "</h1> \n                    <h3>Catchphrase: ").concat(this.catchPhrase, "</h3>\n                </div>");
    };
    return Company;
}());
exports.Company = Company;
