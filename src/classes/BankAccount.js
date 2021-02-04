"use strict";
exports.__esModule = true;
exports.BankAccount = void 0;
var BankAccount = /** @class */ (function () {
    function BankAccount(balance, key) {
        this.balance = balance;
        this.key = key;
    }
    BankAccount.prototype.deposit = function (amount) {
        if (amount < 0)
            return false;
        this.balance += amount;
        return true;
    };
    BankAccount.prototype.getKey = function () {
        return this.key;
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
exports.BankAccount = BankAccount;
