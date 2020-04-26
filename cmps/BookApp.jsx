import BookService from '../services/BookService.js'
import BookList from './BookList.jsx'
import BookDetails from './BookDetails.jsx'
import BookFilter from '../cmps/BookFilter.jsx'

export default class BookApp extends React.Component {
    state = {
        books: null,
        selectedBook: null,
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

    onSelectBook = (selectedBook) => {
        this.setState({ selectedBook })
    }

  

    onClearSelected = () => {
        this.setState({ selectedBook: null })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy}, () => this.loadBooks())
    }

    onDelete = (bookId) => {
        BookService.removeBook(bookId)
        this.onClearSelected()
        this.setState({ BookIdToEdit: null })
        this.loadCars()
    }

    render() {
        const  {books, selectedBook } = this.state
        return (
            <div className="container">
                {!selectedBook &&<BookFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} />}
                {!selectedBook && books &&<BookList onSelectBook={ this.onSelectBook } books={ books } />}
                {selectedBook && <BookDetails book={selectedBook} onDelete={ this.onDelete } onBack={ this.onClearSelected }></BookDetails>} 
            </div>
        )
    }
}
