import classes from './BookItem.module.css'

const BookItem = props => {

    return(
        <div className={`row ${classes.ul}`}>
            <div className={'col'}>
                <h4>{props.name}</h4>
                <p><i>-{props.author.name} {props.author.surname}</i></p>
            </div>
            <div className={'col'}>
                {props.category}
            </div>
            <div className={'col'}>
                <span className={'badge badge-secondary p-2'}>
                    {props.availableCopies}
                </span>
            </div>
            <div className={`col ${classes.actions}`}>
                <button onClick={() => props.onMarkTaken(props.id)} className={'btn-sm btn-success'}>Mark as taken</button>
                <button onClick={() => props.onEdit(props.id)} className={'btn-sm btn-info'}>Edit book</button>
                <button onClick={() => props.onDelete(props.id)} className={'btn-sm btn-danger'}>Delete book</button>
            </div>
        </div>
    )
}

export default BookItem