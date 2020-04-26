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
        this.unsubscribeFromEventBus = eventBus.on('del-msg', (txt) => {
            const delay = 3000;
            this.setState({ txt})
            setTimeout(() => {
                this.setState({ txt: null })
            }, delay)
        })
    }
    componentWillUnmount() {
        this.unsubscribeFromEventBus();
    }
    render() {
        const { msg, id,txt } = this.state
        console.log(txt,msg);
        return (!msg && !txt) ? '' : <section className="user-msg">
            <button onClick={() => {
                this.setState({ msg: null, id: null, path: null })
            }}>x</button>
            {!id && <Link to={`${msg.path}${msg.id}`} target="_blank">{msg.txt}, Check It Out!</Link>}
        </section >
    }
}