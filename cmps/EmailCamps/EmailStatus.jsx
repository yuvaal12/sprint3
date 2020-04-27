
export default class EmailStatus extends React.Component {

    state = {
        cntUnRead: 0,
        cntEmails: 0
    }

    componentDidMount() {
        this.cntHowMuchReadEmails()
    }

    cntHowMuchReadEmails() {

        this.props.emails.map(email => {
            this.setState({ cntEmails: this.state.cntEmails++ })
            // console.log(this.state.cntEmails);
            if (!email.isRead) this.setState({ cntUnRead: this.state.cntUnRead++ })
            console.log(this.state.cntUnRead, 'cntRead');
            console.log(this.state.cntEmails, 'cntEmails');

        });
    }

    render() {
        // console.log(this.state.cntEmails , 'cntEmails from Render');
        console.log(this.state);

        return (
            <h2> MailBox: ({ this.state.cntUnRead} / { this.state.cntEmails})</h2 >
        )
    }

}