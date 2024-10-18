"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPersonById = getPersonById;
const lodash_1 = __importDefault(require("lodash"));
const people = [
    {
        id: 1,
        name: "Peter",
    },
    {
        id: 2,
        name: "Rachel",
    },
    {
        id: 3,
        name: "John",
    },
    {
        id: 4,
        name: "Tim",
    },
    {
        id: 5,
        name: "Zed",
    },
];
function getPersonById(id) {
    const person = lodash_1.default.find(people, { id });
    console.log(person);
}
