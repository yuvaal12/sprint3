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
        if(field === 'read') this.setState(prevState => ({ filter: { ...prevState.filter, unread: '' } }))
        if(field === 'unread') this.setState(prevState => ({ filter: { ...prevState.filter, read: '' } }))
        if(field === 'body') this.setState(prevState => ({ filter: { ...prevState.filter, read: '' ,unread: ''} }))
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
                    <button className="read-btn" type="button" name='read' value='read' onClick={this.handleChange}>read</button>
                    <button className="read-btn" type="button" name='unread' value='unread' onClick={this.handleChange}>unread</button>
                </form>
            </React.Fragment>
        )
    }
}