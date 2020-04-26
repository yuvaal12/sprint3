const { Link } = ReactRouterDOM

export default function EmailsPreview(props) {
    const { email } = props
    const isRead = (email.isRead)? 'bold' : ''
    return (
        <Link className="emailLink" to={`/email/${email.id}`}>
            <article className={`email-preview ${isRead}`}>
                <div className="email-from">{email.from}</div>
                <div className="email-subject">{email.subject}</div>
                <div className="email-body">{email.body}</div>
                <div className="email-sentAt">{email.sentAt}</div>
            </article>
        </Link>
    )
}