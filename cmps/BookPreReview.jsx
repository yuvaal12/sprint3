
export default class BookPreReview extends React.Component {
    state = {
        review: this.props.review,
        remove: this.props.removeReview
    }
    render() {
        return (
            <div>
                <span onClick={this.state.remove}>x</span>
                <h1>{this.state.review.fullName}</h1>
                <span>{this.state.review.stars}</span>
                <h6>{this.state.review.readDate}</h6>
                <p>{this.state.review.reviewTxt}</p>
                <hr/>
            </div>
        )
    }
}
