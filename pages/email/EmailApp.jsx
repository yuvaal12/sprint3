import emailService from '../../services/emailService.js'
import EmailList from '../../cmps/EmailCamps/EmailList.jsx'
import EmailStatus from '../../cmps/EmailCamps/EmailStatus.jsx'
import EmailFilter from '../../cmps/EmailCamps/EmailFilter.jsx'
import EmailAdd from '../../cmps/EmailCamps/EmailAdd.jsx'

export default class EmailApp extends React.Component {
    state = {
        emails: null,
        filterBy: null,
        isAdd: false,
        isMailBox: true
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

    onDel = (emailId) => {
        emailService.removeEmail(emailId)
        this.loadEmails()

    }


    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => this.loadEmails())
    }

    toggleAdd() {
        var add = this.state.isAdd
        if (!add) {
            this.setState({ isAdd: true })
            this.setState({ isMailBox: false })
        } else {
            this.setState({ isAdd: false })
            this.setState({ isMailBox: true })
        }
    }
    toggleMailBox() {
        this.setState(prevState => ({ ...prevState.filterBy, filterBy: null }))
        this.setState({ isMailBox: true })
        this.setState({ isAdd: false })
        this.onSetFilter(null)
    }
    toggleStar() {
        this.onSetFilter('star')
        this.setState({ isAdd: false })
    }
    toggleReMail() {
        this.onSetFilter('re')
        this.setState({ isAdd: false })
    }


    render() {
        const { emails, isAdd, filterBy, isMailBox } = this.state

        return (
            <section>
                <main className="emails-page">
                    <div className="emails-container">
                        <div className="side-bar">
                            {emails && <EmailStatus emails={emails} />}
                            <button className="compose" onClick={() => { this.toggleAdd() }}>+Compose</button>
                            <div className="mail-options" onClick={() => { this.toggleMailBox() }}><a>Inbox</a></div>
                            <div className="mail-options" onClick={() => { this.toggleStar() }}><a>starred</a></div>
                            <div className="mail-options" onClick={() => { this.toggleReMail() }}><a>Sent Mail</a></div>
                        </div>
                        <div className="email-main">
                            {!isAdd && <EmailFilter filterBy={filterBy} onSetFilter={this.onSetFilter} />}
                            {isAdd && <EmailAdd />}
                            {!isAdd && emails && isMailBox && <EmailList emails={emails} onDelet={this.onDel}/>}
                        </div>
                    </div>
                </main>
            </section>
        )
    }
}
