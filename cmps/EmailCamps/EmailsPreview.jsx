const { Link } = ReactRouterDOM

export default function EmailsPreview(props) {
    const { email } = props

    return (
        <Link className="linkTo" to={`/email/${email.id}`}>
            <article className="book-preview">
            <h1 className="email-title">subject: {email.subject}</h1>
            <h1 className="email-body">content: {email.body}</h1>
            <h1 className="email-time">sentAt: {email.sentAt}</h1>
        </article>
        </Link>
    )
}