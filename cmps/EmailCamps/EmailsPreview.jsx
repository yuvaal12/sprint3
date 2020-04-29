const { Link } = ReactRouterDOM
import emailService from '../../services/emailService.js'

export default class EmailsPreview extends React.Component {

    state = {
        star: this.props.email.isStar,
        mailRead: this.props.email.isRead,
        isShowen: this.props.email.isShowen,
        isRemove: this.props.email.isRemove,
    }

    setStar = () => {
        const { email } = this.props
        emailService.saveMail(email.id, 'isStar', !email.isStar)
        this.setState(prevState => ({ star: !prevState.star }))
    }

    isReadMail = () =>{
        const { email } = this.props
        emailService.saveMail(email.id, 'isRead', !email.isRead)
        this.setState(prevState => ({ mailRead: !prevState.mailRead }))
    }

    toggleShowen = () =>{
        const { email } = this.props
        emailService.saveMail(email.id, 'isShowen', !email.isShowen)
        this.setState(prevState => ({ isShowen: !prevState.isShowen }))

    }

    onDelete = () => {
        const { email } = this.props
        emailService.saveMail(email.id, 'isRemove', !email.isRemove)
        emailService.removeEmail(email.id)
        // this.setState(prevState => ({ isRemove: !prevState.isRemove }))

    }

    render() {
        const { email } = this.props
        const isRead = (!this.state.mailRead) ? 'bold' : ''
        const classStart = (this.state.star) ? 'yellow' : ''
        const classRemove = (this.state.isRemove) ? 'remove' : ''
        return (
            <div className="line-container">
                <button className={`email-star ${classStart}`} onClick={this.setStar}>✯</button>
                <Link className="emailLink" to={`/email/${email.id}`}>
                    <article className={`email-preview ${isRead}`} onClick={this.toggleShowen}>

                        <div className="email-from">{email.from}</div>
                        <div className="email-subject">{email.subject}</div>
                        <div className="email-body">{email.body}</div>
                        <div className="email-sent-at">{email.sentAt}</div>
                    </article>
                </Link>
                <div className="btn-mail">
                    <a onClick={this.isReadMail}><img src="/assets/icons/email-icon.png" alt="" /></a>
                    <a onClick={this.onDelete}><img src="/assets/icons/trash.png" alt="" /></a>
                </div>
            </div>
        )

    }

}
