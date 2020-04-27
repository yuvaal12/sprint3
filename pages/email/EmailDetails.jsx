
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

    onDelete = () => {
        emailService.removeEmail(this.state.email.id)
        this.props.history.push('/email')
    }


    render() {
        const { email } = this.state
        
        const Loading = <p>Loading...</p>

        return ((!email) ? Loading : <section>
            <section className="book-detNrev">
                <div className="">
                    <h1 className="">from: {email.from}</h1>
                    <h1 className="">subject: {email.subject}</h1>
                    <h1 className="">body: {email.body}</h1>
                    <span className="">sentAt: {email.sentAt}</span>
                    <button onClick={this.onDelete}>Delete</button>
                </div>
            </section>
        </section>
        )
    }
}