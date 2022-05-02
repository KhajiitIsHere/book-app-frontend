import {useEffect, useRef, useState} from "react";
import BookService from "../repository/book-repository";

const BookForm = props => {

    const [authors, setAuthors] = useState([])
    const [categories, setCategories] = useState([])

    const nameRef = useRef()
    const categoryRef = useRef()
    const authorRef = useRef()
    const copiesRef = useRef()

    const getAuthors = async () => {
        const data = await BookService.fetchAuthors();

        setAuthors(data.data)
    }

    const getCategories = async () => {
        const data = await BookService.fetchCategories();

        setCategories(data.data)
    }

    useEffect(() => {
        getAuthors()
        getCategories()
    }, [])

    const submitHandler = event => {
        event.preventDefault()

        const book = {
            name: nameRef.current.value,
            category: categoryRef.current.value,
            author: authorRef.current.value,
            availableCopies: copiesRef.current.value
        }
        props.onSubmit(book)
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor={'title'} className={'form-label'}>Book Title</label>
            <input className={'form-control'} id={'title'} type={'text'} name={'name'} ref={nameRef}/>

            <label htmlFor={'category'} className={'form-label'}>Category</label>
            <select className={'form-select'} id={'category'} name={'category'} ref={categoryRef}>
                {categories.map(category =>
                    <option key={category} value={category}>{category}</option>
                )}
            </select>

            <label htmlFor={'author'} className={'form-label'}>Author</label>
            <select className={'form-select'} id={'author'} name={'author'} ref={authorRef}>
                {authors.map(author =>
                    <option key={author.id} value={author.id}>{author.name} {author.surname}</option>
                )}
            </select>

            <label htmlFor={'copies'} className={'form-label'}>Copies</label>
            <input className={'form-control'} id={'copies'} type={'text'} name={'availableCopies'} ref={copiesRef}/>
            {props.type === 'ADD' && <button className={'btn btn-primary'} type={'submit'}>Add book</button>}
            {props.type === 'EDIT' && <button className={'btn btn-primary'} type={'submit'}>Edit book</button>}
            <button className={'btn btn-secondary'} onClick={() => props.onCancel()}>Cancel</button>
        </form>
    )
}

export default BookForm