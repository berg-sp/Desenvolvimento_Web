"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(nome) {
        this._nome = nome;
    }
    comer() {
        return `${this._nome} está comendo`;
    }
    sentar() {
        return `${this._nome} sentou`;
    }
}
exports.default = Animal;
