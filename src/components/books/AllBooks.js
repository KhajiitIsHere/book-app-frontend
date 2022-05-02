import BookItem from "./BookItem";
import ReactPaginate from "react-paginate";
import {Fragment, useState} from "react";


const AllBooks = props => {

    const [page, setPage] = useState({
        page: 0,
        size: 5
    })

    const clickHandler = data => {
        setPage({
            ...page,
            page: data.selected
        })
    }

    const offset = page.page * page.size
    const nextOffset = offset + page.size
    const pageCount = Math.ceil(props.books.length / page.size)
    const shownBooks = props.books.filter((elm, idx) => idx >= offset && idx < nextOffset)

    return(
        <Fragment>
            {shownBooks.map(book => <BookItem
                key={book.id}
                onDelete={props.onDelete}
                onEdit={props.onEdit}
                onMarkTaken={props.onMarkTaken}
                {...book}
            />)}
            <ReactPaginate previousLabel={"back"}
                           nextLabel={"next"}
                           breakLabel={<a href="/#">...</a>}
                           breakClassName={"break-me"}
                           pageClassName={"ml-1"}
                           pageCount={pageCount}
                           marginPagesDisplayed={2}
                           pageRangeDisplayed={5}
                           onPageChange={clickHandler}
                           containerClassName={"pagination m-4 justify-content-center"}
                           nextClassName={'page-item'}
                           nextLinkClassName={'page-link'}
                           previousClassName={'page-item'}
                           previousLinkClassName={'page-link'}
                           pageLinkClassName={'page-item page-link'}
                           activeClassName={'page-item active'}
                           disabledClassName={'page-item disabled'}

            />
            <button className={'btn btn-primary'} onClick={props.onAdd}>Add Book</button>
        </Fragment>
    )
}

export default AllBooks