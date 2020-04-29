import emailService from '../../services/emailService.js'
import storageService from '../../services/storageService.js'

export default class EmailAdd extends React.Component {
    state = {
        mail: {
            from: '',
            subject: '',
            body: ''
        }
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(prevState => ({ mail: { ...prevState.mail, [field]: value } }))
    }

    sendMail = () =>{
        const newMail = this.state.mail
        emailService.addEmail(newMail)
        // console.log(newMail);
        
    }

    render() {
        const { from, subject, body} = this.state
        return (
            <form className="new-mail" >
                <h1>New Mail</h1>
                <input name='from' className="email-search" placeholder="From" type="text" value={from} onChange={this.handleChange} />
                <input name='subject' className="email-search" placeholder="Subject" type="text" value={subject} onChange={this.handleChange} />
                <textarea name='body' className="email-search" placeholder="Search Mail" type="text" value={body} onChange={this.handleChange} />
                <button type="submit" className="send-btn" onClick={this.sendMail}>Send Mail </button>
            </form>
        )
    }
}
