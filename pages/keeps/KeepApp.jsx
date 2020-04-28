import { eventBus } from '../../services/eventBusService.js'
import keepService from '../../services/keepService.js'
import KeepList from '../../cmps/KeepsCmps/KeepList.jsx'
import KeepAdd from '../../cmps/KeepsCmps/KeepAdd.jsx'
import UserMsg from '../../cmps/UserMsg.jsx'
import KeepFilter from '../../cmps/KeepsCmps/KeepFilter.jsx'

export default class KeepApp extends React.Component {
    state = {
        keeps: null,
        filterBy: null,
    }

    componentDidMount() {
        this.loadKeeps()
    }

    loadKeeps =() => {
        keepService.query(this.state.filterBy)
            .then(keeps => {
                this.setState({ keeps })
            })
    }

    onSaveKeep = (keep) => {
        keepService.addKeep(keep)
        this.loadKeeps()
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, () => this.loadKeeps())
    }

    onDelete = (keepId) => {
        // eventBus.emit('del-msg', { txt: ' Deleted Successfully!'})
        keepService.removeKeep(keepId)
        this.loadKeeps()
    }
    render() {
        const { keeps } = this.state
        return (
            <section className="container">
                <KeepFilter filterBy={this.state.filterBy} onSetFilter={this.onSetFilter} />
                <KeepAdd onLoad={this.loadKeeps}/>
                {keeps && <KeepList keeps={keeps} onDelete={this.onDelete}  onLoad={this.loadKeeps}/>}
            </section>
        )
    }
}
