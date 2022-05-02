import {Fragment, useEffect, useState} from "react";
import BookService from "../repository/book-repository";
import BookForm from "./BookForm";
import AllBooks from "./AllBooks";

const BookList = () => {

    const [books, setBooks] = useState([])
    const [editPage, setEditPage] = useState(false)
    const [selectedBook, setSelectedBook] = useState(null)

    const getBooks = async () => {
        const data = await BookService.fetchBooks();

        setBooks(data.data)
    }

    const markTakenHandler = async (bookId) => {
        await BookService.markBookAsTaken(bookId)
        getBooks()
    }

    const deleteBookHandler = async (bookId) => {
        await BookService.deleteBook(bookId)
        getBooks()
    }

    const startEditBookHandler = bookId => {
        setSelectedBook(bookId)
        setEditPage(true)
    }

    const endEditBookHandler = () => {
        setSelectedBook(null)
        setEditPage(false)
    }

    const startAddBookHandler = () => {
        setSelectedBook(null)
        setEditPage(true)
    }

    const editBookHandler = async book => {
        await BookService.editBook(selectedBook, book)
        endEditBookHandler()
        getBooks()
    }

    const addBookHandler = async book => {
        await BookService.addBook(book)
        setEditPage(false)
        getBooks()
    }

    useEffect(() => {
        getBooks()
    }, [])

    let content =
        <AllBooks
            books={books}
            onDelete={deleteBookHandler}
            onEdit={startEditBookHandler}
            onMarkTaken={markTakenHandler}
            onAdd={startAddBookHandler}
        />

    if(editPage && selectedBook !== null)
        content = <BookForm type={'EDIT'} onSubmit={editBookHandler} onCancel={endEditBookHandler}/>

    else if(editPage && selectedBook === null)
        content = <BookForm type={'ADD'} onSubmit={addBookHandler} onCancel={endEditBookHandler}/>


    return (
        <Fragment>
            {content}
        </Fragment>
    )
}

export default BookList