const { NavLink, Switch, Route } = ReactRouterDOM

import BookService from '../../services/BookService.js'
import BookList from '../../cmps/BooksCamps/BookList.jsx'
import BookFilter from '../../cmps/BooksCamps/BookFilter.jsx'
import BookAdd from '../../cmps/BooksCamps/BookAdd.jsx'

export default class BookApp extends React.Component {
    state = {
        books: null,
        filterBy: null,
        isAdd: false,
        addName: 'Add Book'
    }

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks() {
        BookService.query(this.state.filterBy)
            .then(books => {
                this.setState({ books })
            })
    }

    onSaveBook = (book) => {
        BookService.saveBook(book)
        this.loadBooks()
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => this.loadBooks())
    }

    onDelete = (bookId) => {
        BookService.removeBook(bookId)
        this.loadBooks()
    }

    toggleAdd() {
        var add = this.state.isAdd
        if (!add) {
            this.setState({
                isAdd: true,
                addName: 'Close'
            })
        } else {
            this.setState({ 
                isAdd: false,
                addName: 'Add Book' 
            })
        }
    }

    render() {
        const { books,isAdd,addName } = this.state
        return (
            <div className="container">
                <BookFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} />
                <span className="add-book-btn" onClick={() =>{this.toggleAdd()}}>{addName}</span>
                {isAdd && <BookAdd />}
                {books && <BookList books={books} />}
            </div>
        )
    }
}
