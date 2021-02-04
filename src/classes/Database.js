"use strict";
exports.__esModule = true;
exports.Database = void 0;
var Database = /** @class */ (function () {
    function Database() {
        this.accounts = [];
    }
    Database.prototype.insert = function (account) {
        var foundDuplicate = this.find(account.getKey());
        if (Boolean(foundDuplicate))
            return false;
        this.accounts.push(account);
        return true;
    };
    Database.prototype.find = function (key) {
        return this.accounts.find(function (account) { return account.getKey().equals(key); });
    };
    Database.prototype["delete"] = function (key) {
        var found = this.find(key);
        this.accounts = this.accounts.filter(function (account) { return !account.getKey().equals(key); });
        return Boolean(found);
    };
    return Database;
}());
exports.Database = Database;
