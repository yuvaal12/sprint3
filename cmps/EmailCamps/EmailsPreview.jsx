const { Link } = ReactRouterDOM
import emailService from '../../services/emailService.js'

export default class EmailsPreview extends React.Component {

    state = {
        star: this.props.email.isStar
    }

    setStar = () => {
        const { email } = this.props
        emailService.saveMail(email.id, 'isStar', !email.isStar)
        this.setState(prevState => ({ star: !prevState.star }))
    }

    render() {
        const { email } = this.props
        const isRead = (!email.isRead) ? 'bold' : ''
        const classStart = (this.state.star) ? 'yellow' : ''

        return (
            <div className="line-container">
                <button className={`email-star ${classStart}`} onClick={this.setStar}>✯</button>
                <Link className="emailLink" to={`/email/${email.id}`}>
                    <article className={`email-preview ${isRead}`}>

                        <div className="email-from">{email.from}</div>
                        <div className="email-subject">{email.subject}</div>
                        <div className="email-body">{email.body}</div>
                        <div className="email-sent-at">{email.sentAt}</div>
                    </article>
                </Link>
                <div className="btn-mail">
                    <a onClick={this.setStar}><img src="/assets/icons/email-icon.png" alt="" /></a>
                    <a onClick={this.setStar}><img src="/assets/icons/trash.png" alt="" /></a>
                </div>
            </div>
        )

    }

}
