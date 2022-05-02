import classes from './Categories.module.css'
import {useCallback, useEffect, useState} from 'react'
import BookService from "../repository/book-repository";

const Categories = () => {

    const [categories, setCategories] = useState([])

    const fillCategories = useCallback(async () => {
        const data = await BookService.fetchCategories()
        setCategories(data.data)
    }, [])

    useEffect(() => {
        fillCategories()
    }, [fillCategories])

    return (
        <div>
            {categories.map(category => <div
                key={category}
                className={classes['category-item']}
            ><h4>{category}</h4>
            </div>)}
        </div>
    )
}

export default Categories