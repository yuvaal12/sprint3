import BookService from '../../services/BookService.js'
import BookList from '../BookList.jsx'
import BookDetails from './BookDetails.jsx'
import BookFilter from './BookFilter.jsx'

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


    render() {
        const  {books } = this.state
        return (
            <div className="container">
                <BookFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} />
                {books &&<BookList books={ books } />}
            </div>
        )
    }
}