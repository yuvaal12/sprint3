const { NavLink, Switch, Route } = ReactRouterDOM

import BookService from '../services/BookService.js'
import BookList from '../cmps/BookList.jsx'
import BookFilter from '../cmps/BookFilter.jsx'
import BookAdd from '../cmps/BookAdd.jsx'

export default class BookApp extends React.Component {
    state = {
        books: null,
        filterBy: null,
        isAdd: false
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
        this.onClearSelected()
        this.loadCars()
    }

    toggleAdd() {
        var add = this.state.isAdd
        if (add) {
            this.setState({
                isAdd: true
            })
        } else {
            this.setState({ isAdd: false })
        }
    }

    render() {
        const { books,isAdd } = this.state
        return (
            <div className="container">
                <BookFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} />
                <div className="nav-bar">
                    <span onClick={this.toggleAdd}>Add Book</span>
                </div>
                {isAdd && <BookAdd />}
                {books && <BookList books={books} />}
            </div>
        )
    }
}
