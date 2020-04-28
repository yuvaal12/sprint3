export default class EmailFilter extends React.Component {
    state = {
        filter: {
            body: '',
            read: '',
            unread: ''
        }
    }
    handleChange = ({ target }) => {

        const field = target.name
        const value = (target.type === 'number') ? parseInt(target.value) : target.value
        this.setState(prevState => ({ filter: { ...prevState.filter, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filter)
        })
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filter)
    }

    render() {
        const { body, read, unread } = this.state.filter
        return (
            <React.Fragment>
                <form onChange={this.onFilter}>
                    <input name='body' className="email-search" placeholder="Search Mail" type="text" value={body} onChange={this.handleChange} />
                </form>
            </React.Fragment>
        )
    }
}