import axios from '../custom-axios/axios'

const BookService = {
    fetchBooks: () => {
        return axios.get('/books')
    },
    fetchCategories: () => {
        return axios.get('/books/categories')
    },
    fetchCountries: () => {
        return axios.get('/countries')
    },
    fetchAuthors: () => {
        return axios.get('/authors')
    },
    addBook: (book) => {
        return axios.post('/books', {
            'name': book.name,
            'category': book.category,
            'authorId': book.author,
            'availableCopies': book.availableCopies
        })
    },
    editBook: (bookId, book) => {
        return axios.post(`/books/edit/${bookId}`, {
            'name': book.name,
            'category': book.category,
            'authorId': book.author,
            'availableCopies': book.availableCopies
        })
    },
    deleteBook: (bookId) => {
        return axios.post(`/books/delete/${bookId}`)
    },
    markBookAsTaken: (bookId) => {
        return axios.post(`/books/mark-taken/${bookId}`)
    }
}

export default BookService