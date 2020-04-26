import BookService from '../../services/BookService.js'
import BookReviewList from "./BookReviewList.jsx"

export default class BookReview extends React.Component {
    state = {
        reviews: null,
        review: {
            fullName: 'Books Reader',
            stars: 3,
            readDate: this.todayDate,
            reviewTxt: 'Your review is here...'
        }
    }
    get todayDate() {
        return new Date().toJSON().slice(0, 10).replace(/-/g, '-')
    }
    componentDidMount() {
        this.loadReviews()
    }
    handleInput = ({ target }) => {
        const field = target.name
        const value = (field === 'stars') ? parseInt(target.value) : target.value
        this.setState(prevState => {
            return {
                review: {
                    ...prevState.review,
                    [field]: value
                }
            }
        })
    }
    loadReviews() {
        const bookId = this.props.bookId
        BookService.reviewQuery(bookId)
            .then(reviews => { this.setState({ reviews }) })
    }
    onAddReview = (ev) => {
        ev.preventDefault()
        BookService.addReview(this.state.review, this.props.bookId)
            .then(()=>this.loadReviews())
    }
    onRemoveReview = () =>{
        BookService.removeReview(this.state.review, this.props.bookId)
            .then(()=>this.loadReviews())
    }

    render() {
        const { fullName, readDate, reviewTxt } = this.state.review
        return (
            <React.Fragment>
                <section className="rev-list">
                    {this.state.reviews && <BookReviewList reviews={this.state.reviews} removeReview={this.onRemoveReview}/>}
                </section>
                <form onSubmit={this.onAddReview}>
                    <span>Name</span><input placeholder="Full Name" name="fullName" value={fullName} onChange={this.handleInput} />
                    <span>Rate</span>
                    <select name="stars" onChange={this.handleInput}>
                        <option value="1">1 Star</option>
                        <option value="2">2 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="5">5 Stars</option>
                    </select>
                    <span>Read it at</span><input type="date" name="readDate" value={readDate} onChange={this.handleInput} />
                    <span>More</span><textarea placeholder="explain your descision" name="reviewTxt" value={reviewTxt} onChange={this.handleInput} />
                    <button className="save-btn">Save</button>
                </form>
            </React.Fragment>
        )
    }
}
