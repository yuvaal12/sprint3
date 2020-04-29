import emailService from '../../services/emailService.js'

export default class EmailAdd extends React.Component {
    // state = {
    //     review: this.props.review,
    //     remove: this.props.removeReview
    // }
    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filter)
    }

    render() {
        return (
            <form className="new-mail" >
                <h1>New Mail</h1>
                <input type="text" placeholder="To:"/>
                <input type="text" placeholder="subject:"/>
                <textarea rows="4" cols="50"></textarea>
                <button type="submit" className="send-btn">Send Mail </button>
            </form>
        )
    }
}
