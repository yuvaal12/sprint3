import keepService from '../../services/keepService.js'
export default class KeepFilter extends React.Component {
    state = {
        filter: {
            title: ''
        }
    }
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(prevState => ({ filter: { ...prevState.filter, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filter)
        })
    }

    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filter)
    }
    render() {
        const { title } = this.state.filter
        return (
            <React.Fragment>
                <form className="filter-win" onSubmit={this.onFilter}>
                    <label htmlFor=""></label>
                    <input type="text" placeholder="By title:" name='title' value={title} onChange={this.handleChange} />
                    <button>Filter</button>
                </form>
            </React.Fragment>
        )
    }
}