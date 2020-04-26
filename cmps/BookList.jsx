import BookPreview from '../cmps/BookPreview.jsx'


export default function BookList(props) {
    return (
        <div className="book-list">
            { props.books.map(book => <BookPreview  key={ book.id } book={ book } />) }
        </div>
    )
}