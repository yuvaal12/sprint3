import BookPreReview from "./BookPreReview.jsx"
export default class BookReviewList extends React.Component {

    render() {
        console.log(this.props.removeReview);
        
        return (
            <div className="review-list">
                { this.props.reviews.map(review => <BookPreReview  key={ review.id } removeReview={this.props.removeReview} review={ review } />) }
            </div>
        )
    }
}
