const { Link } = ReactRouterDOM
import { eventBus } from '../services/eventBusService.js'

export default class UserMsg extends React.Component {
    state = {
        msg: null,
        id: null,
        path: null
    }

    componentDidMount() {
        this.unsubscribeFromEventBus = eventBus.on('show-msg', (msg, id, path) => {
            const delay = 3000;
            this.setState({ msg, id, path })
            setTimeout(() => {
                this.setState({ msg: null, id: null, path: null })
            }, delay)
        })
        this.unsubscribeShowMsg = eventBus.on('del-msg', (msg, id) => {
            const delay = 3000;
            this.setState({ msg, id })
            setTimeout(() => {
                this.setState({ msg: null, id: null })
            }, delay)
        })
    }
    componentWillUnmount() {
        this.unsubscribeFromEventBus();
        this.unsubscribeShowMsg();
    }
    render() {
        const { msg, id, txt } = this.state
        return (!msg && !txt) ? '' : <section className="user-msg">
            <button onClick={() => {
                this.setState({ msg: null, id: null, path: null })
            }}>x</button>
            {msg.txt}
            {id && <Link to={`${msg.path}${msg.id}`} target="_blank">, Check It Out!</Link>}
        </section >
    }
}