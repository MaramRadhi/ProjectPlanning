import * as React from 'react';
import { Route, Link, useParams } from 'react-router-dom';
import { Admin, Resource, Datagrid, List, TextField, EditGuesser, EditButton, useRecordContext, } from './';
import fakeRestDataProvider from 'ra-data-fakerest';
import { Button } from '@mui/material';
export default {
    title: 'react-admin/Resource',
};
var dataProvider = fakeRestDataProvider({
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
    var record = useRecordContext();
    return (React.createElement(Button, { component: Link, to: "/authors/".concat(record.id, "/books"), color: "primary" }, "Books"));
};
var AuthorList = function () { return (React.createElement(List, null,
    React.createElement(Datagrid, null,
        React.createElement(TextField, { source: "id" }),
        React.createElement(TextField, { source: "firstName" }),
        React.createElement(TextField, { source: "lastName" }),
        React.createElement(EditButton, null),
        React.createElement(BooksButton, null)))); };
var BookList = function () {
    var authorId = useParams().authorId;
    return (React.createElement(List, { resource: "books", filter: { authorId: authorId } },
        React.createElement(Datagrid, { rowClick: "edit" },
            React.createElement(TextField, { source: "id" }),
            React.createElement(TextField, { source: "title" }),
            React.createElement(TextField, { source: "year" }))));
};
export var Nested = function () { return (React.createElement(Admin, { dataProvider: dataProvider },
    React.createElement(Resource, { name: "authors", list: AuthorList, edit: EditGuesser },
        React.createElement(Route, { path: ":authorId/books", element: React.createElement(BookList, null) })))); };
//# sourceMappingURL=Resource.stories.js.map