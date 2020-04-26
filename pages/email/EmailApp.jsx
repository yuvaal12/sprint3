import emailService from '../../services/emailService.js'
import EmailList from '../../cmps/EmailCamps/EmailList.jsx'
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
        var emails = emailService.query()
        this.setState({ emails })
        console.log(emails);

    }


    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => this.loadBooks())
    }


    render() {
        const { emails } = this.state

        return (
            <section>
                <main className="home-Page">
                    <h1>Emails</h1>
                    <div className="emails-container">
                        <div className="side-bar">
                            <h2>Side Bar</h2>
                        </div>
                        <div className="email-main">
                            <h2>main</h2>
                            {/* <EmailFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} /> */}
                            {emails && <EmailList emails={emails} />}
                        </div>
                    </div>
                </main>
            </section>
        )
    }
}
