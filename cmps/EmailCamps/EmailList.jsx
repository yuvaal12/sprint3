import EmailsPreview from './EmailsPreview.jsx'


export default function EmailList(props) {
     console.log(props);
    
    return (
        <div className="Emails-list">
            { props.emails.map(email => <EmailsPreview  key={ email.id } email={ email } />) }
        </div>
    )
}