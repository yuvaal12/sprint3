import BookService from '../../services/BookService.js'
import SearchList from './SearchList.jsx'

export default class BookAdd extends React.Component {
    state = {
        bookName: '',
        books: null
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState({ [field]: value }, () => {
            this.onSearch(this.state.bookName)
        })
    }
    
    onSearch = (searchBy) => {
        BookService.getGoogleBooks(searchBy)
            .then(books => this.setState({ books }))
    }
    render() {
        const { books, bookName } = this.state
        return (
            <React.Fragment>
                <section className="main-search-book">
                    <form className="search-book-form">
                        <label htmlFor="search-label">Search Book:</label>
                        <input type="text" autoComplete="off" className="search-input" name="bookName" id="search-book" value={bookName} onChange={this.handleChange} placeholder="Book Name Here..." />
                    </form>
                </section>
                {books && <SearchList books={books} onAddBook={this.onAddBook} />}
                <hr />
            </React.Fragment>
        )
    }
}