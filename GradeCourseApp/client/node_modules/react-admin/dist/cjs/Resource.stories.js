"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nested = void 0;
var React = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var _1 = require("./");
var ra_data_fakerest_1 = __importDefault(require("ra-data-fakerest"));
var material_1 = require("@mui/material");
exports.default = {
    title: 'react-admin/Resource',
};
var dataProvider = (0, ra_data_fakerest_1.default)({
    books: [
        {
            id: 1,
            title: 'War and Peace',
            authorId: 1,
            year: 1869,
        },
        {
            id: 2,
            title: 'Anna Karenina',
            authorId: 1,
            year: 1877,
        },
        {
            id: 3,
            title: 'Pride and Predjudice',
            authorId: 2,
            year: 1813,
        },
        {
            id: 4,
            authorId: 2,
            title: 'Sense and Sensibility',
            year: 1811,
        },
        {
            id: 5,
            title: 'The Picture of Dorian Gray',
            authorId: 3,
            year: 1890,
        },
        {
            id: 6,
            title: 'Le Petit Prince',
            authorId: 4,
            year: 1943,
        },
        {
            id: 7,
            title: "Alice's Adventures in Wonderland",
            authorId: 5,
            year: 1865,
        },
        {
            id: 8,
            title: 'Madame Bovary',
            authorId: 6,
            year: 1856,
        },
        { id: 9, title: 'The Hobbit', authorId: 7, year: 1937 },
        {
            id: 10,
            title: 'The Lord of the Rings',
            authorId: 7,
            year: 1954,
        },
        {
            id: 11,
            title: "Harry Potter and the Philosopher's Stone",
            authorId: 8,
            year: 1997,
        },
        {
            id: 12,
            title: 'The Alchemist',
            authorId: 9,
            year: 1988,
        },
        {
            id: 13,
            title: 'A Catcher in the Rye',
            authorId: 10,
            year: 1951,
        },
        {
            id: 14,
            title: 'Ulysses',
            authorId: 11,
            year: 1922,
        },
    ],
    authors: [
        { id: 1, firstName: 'Leo', lastName: 'Tolstoy' },
        { id: 2, firstName: 'Jane', lastName: 'Austen' },
        { id: 3, firstName: 'Oscar', lastName: 'Wilde' },
        { id: 4, firstName: 'Antoine', lastName: 'de Saint-Exupéry' },
        { id: 5, firstName: 'Lewis', lastName: 'Carroll' },
        { id: 6, firstName: 'Gustave', lastName: 'Flaubert' },
        { id: 7, firstName: 'J. R. R.', lastName: 'Tolkien' },
        { id: 8, firstName: 'J. K.', lastName: 'Rowling' },
        { id: 9, firstName: 'Paulo', lastName: 'Coelho' },
        { id: 10, firstName: 'J. D.', lastName: 'Salinger' },
        { id: 11, firstName: 'James', lastName: 'Joyce' },
    ],
}, true);
var BooksButton = function () {
    var record = (0, _1.useRecordContext)();
    return (React.createElement(material_1.Button, { component: react_router_dom_1.Link, to: "/authors/".concat(record.id, "/books"), color: "primary" }, "Books"));
};
var AuthorList = function () { return (React.createElement(_1.List, null,
    React.createElement(_1.Datagrid, null,
        React.createElement(_1.TextField, { source: "id" }),
        React.createElement(_1.TextField, { source: "firstName" }),
        React.createElement(_1.TextField, { source: "lastName" }),
        React.createElement(_1.EditButton, null),
        React.createElement(BooksButton, null)))); };
var BookList = function () {
    var authorId = (0, react_router_dom_1.useParams)().authorId;
    return (React.createElement(_1.List, { resource: "books", filter: { authorId: authorId } },
        React.createElement(_1.Datagrid, { rowClick: "edit" },
            React.createElement(_1.TextField, { source: "id" }),
            React.createElement(_1.TextField, { source: "title" }),
            React.createElement(_1.TextField, { source: "year" }))));
};
var Nested = function () { return (React.createElement(_1.Admin, { dataProvider: dataProvider },
    React.createElement(_1.Resource, { name: "authors", list: AuthorList, edit: _1.EditGuesser },
        React.createElement(react_router_dom_1.Route, { path: ":authorId/books", element: React.createElement(BookList, null) })))); };
exports.Nested = Nested;
//# sourceMappingURL=Resource.stories.js.map