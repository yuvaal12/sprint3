import EmailsPreview from './EmailsPreview.jsx'


export default function EmailList(props) {

    return (
        <div className="flex mail-list">
            <div className="Emails-list">
                {props.emails.map(email => <EmailsPreview key={email.id} email={email} />)}
            </div>
        </div>
    )
}


