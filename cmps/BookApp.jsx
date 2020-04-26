import BookService from '../services/BookService.js'
import BookList from './BookList.jsx'
import BookDetails from './BookDetails.jsx'
import BookFilter from '../cmps/BookFilter.jsx'

export default class BookApp extends React.Component {
    state = {
        books: null,
        BookIdToEdit: null
    }

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks() {
        var books = BookService.query(this.state.filterBy)
        this.setState({ 
            books,
        })
    }

    onSaveBook = (book) => {
        BookService.addBook(book)
        this.setState({ BookIdToEdit: null })
        this.loadBooks()
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy}, () => this.loadBooks())
    }

    onDelete = (bookId) => {
        BookService.removeBook(bookId)
        this.setState({ BookIdToEdit: null })
        this.loadCars()
    }

    render() {
        const  {books, selectedBook } = this.state
        return (
            <div className="container">
                <BookFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} />
                {books &&<BookList books={ books } />}
                <BookDetails onDelete={ this.onDelete }></BookDetails>
            </div>
        )
    }
}
