import keepService from '../../services/keepService.js'
import KeepList from '../../cmps/KeepsCmps/KeepList.jsx'
import KeepFilter from '../../cmps/KeepsCmps/KeepFilter.jsx'

export default class KeepApp extends React.Component {
    state = {
        keeps: null,
        filterBy: null,
    }

    componentDidMount() {
        this.loadKeeps()
    }

    loadKeeps() {
        keepService.query(this.state.filterBy)
            .then(keeps => {
                this.setState({ keeps })
            })
    }

    onSaveBook = (keep) => {
        keepService.addKeep(keep)
        this.loadKeeps()
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => this.loadKeeps())
    }

    onDelete = (keepId) => {
        keepService.removeKeep(keepId)
        this.loadKeeps()
    }
    render() {
        console.log(keepService.query());
        const { keeps } = this.state
        return (
            <section className="container">
                {/* <KeepFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} /> */}
                {keeps && <KeepList keeps={keeps} />}
            </section>
        )
    }
}