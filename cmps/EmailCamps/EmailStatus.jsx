
export default class EmailStatus extends React.Component {

    state = {
        cntUnRead: 0,
        cntEmails: 0
    }

    componentDidMount() {
        this.cntHowMuchReadEmails()
    }

    cntHowMuchReadEmails() {

        this.props.emails.forEach(email => {
            this.setState(prevState => ({ cntEmails: prevState.cntEmails+1}))
            if (!email.isRead) this.setState(prevState => ({ cntUnRead: prevState.cntUnRead+1}))

        });
    }

    render() {
        return (
            <h2> MailBox: ({ this.state.cntUnRead} / { this.state.cntEmails})</h2 >
        )
    }

}