
import emailService from '../../services/emailService.js'

export default class EmailDetails extends React.Component {
    state = {
        email: null,
        class: '',

    }
    componentDidMount() {
        const id = this.props.match.params.theEmailId
        
        emailService.getEmailById(id)
            .then(email => {
                this.setState({ email })
            })

    }

    onClose = () => {
        this.props.history.push('/email')
    }


    render() {
        const { email } = this.state
        
        const Loading = <p>Loading...</p>

        return ((!email) ? Loading : <section>
            <section className="email-details">
            <button className="read-btn" onClick={this.onClose}>X</button>
                    <h1>From: {email.from}</h1>
                    <h5>Subject: {email.subject}</h5>
                    <h5>Body: {email.body}</h5>
                    <span className="">SentAt: {email.sentAt}</span>
            </section>
        </section>
        )
    }
}

