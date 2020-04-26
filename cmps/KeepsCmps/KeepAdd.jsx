import keepService from '../../services/keepService.js'
import AddByType from './AddByType.jsx'

export default class KeepAdd extends React.Component {
    state ={
        typePicked: null
    }

    pickType({target}){
        const value = target.value;
        this.setState({typePicked: value})         
    }

    render() {
        return (
            <React.Fragment>
                <section className="main-add-keeps">
                    <form className="add-keep-form">
                        <label>Pick Type:</label>
                        <select className="type-keep" onChange={this.pickType}>
                            {keepService.getTypes().map(type => <option value={type}>{type}</option>) }
                        </select>
                        <AddByType type={this.state.typePicked} />
                    </form>
                </section>
                <hr />
            </React.Fragment>
        )
    }
}
