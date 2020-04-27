import emailService from '../../services/emailService.js'
import EmailList from '../../cmps/EmailCamps/EmailList.jsx'
import EmailStatus from '../../cmps/EmailCamps/EmailStatus.jsx'
// import EmailFilter from '../../cmps/BooksCamps/BookFilter.jsx'

export default class EmailApp extends React.Component {
    state = {
        emails: null,
        filterBy: null,
    }

    componentDidMount() {
        this.loadEmails()
    }

    loadEmails() {
        emailService.query(this.state.filterBy)
            .then(emails => {
                this.setState({ emails })
            })
    }


    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => this.loadBooks())
    }


    render() {
        const { emails } = this.state

        return (
            <section>
                <main className="emails-page">
                    <div className="emails-container">
                        <div className="side-bar">
                            {emails && <EmailStatus emails={emails} />}
                            <div className="mail-options"><a href="">Inbox</a></div>
                            <div className="mail-options"><a href="">starred</a></div>
                            <div className="mail-options"><a href="">sent Mail</a></div>
                            <div className="mail-options"><a href="">Drafts</a></div>
                        </div>
                        <div className="email-main">
                            {/* <EmailFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} /> */}
                            {emails && <EmailList emails={emails} />}
                        </div>
                    </div>
                </main>
            </section>
        )
    }
}
