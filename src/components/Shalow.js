import React from 'react';
import Shelf from './Shelf';
const Shelves = ({books, updateBookShelf}) => {
    const PlanToRead = books.filter((book) => book.shelf === "PlanToRead");
    const currentlyReading = books.filter((book) => book.shelf === "currentlyReading");
    const read = books.filter((book) => book.shelf === "read");
    return (
        <div>
        <Shelf title="Plan To Read" books={PlanToRead} updateBookShelf={updateBookShelf}/>
        <Shelf title="Read" books={read} updateBookShelf={updateBookShelf}/>
            <Shelf title="Currently Reading" books={currentlyReading} updateBookShelf={updateBookShelf}/>
        </div>
    )
}
export default Shelves;