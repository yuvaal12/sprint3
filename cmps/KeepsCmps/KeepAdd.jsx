import keepService from '../../services/keepService.js'
import AddByType from './AddByType.jsx'

export default class KeepAdd extends React.Component {
    state = {
        value: null
    }

    pickType = ({ target }) => {
        const val = target.value;
        this.setState({
            value: val
        })  
    }

    render() {
        return (
            <React.Fragment>
                <section className="main-add-keeps">
                    <form className="add-keep-form">
                        <label>Pick Type:</label>
                        <select className="type-keep" onChange={this.pickType}>
                            {keepService.getTypes().map((type,idx) => <option key={idx} value={type}>{type}</option>)}
                        </select>
                        {this.state.typePicked && <AddByType typeChoose={this.state.typePicked} />}
                    </form>
                </section>
                <hr />
            </React.Fragment>
        )
    }
}
