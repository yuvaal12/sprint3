import keepService from '../../services/keepService.js'
import AddByType from './AddByType.jsx'

export default class KeepAdd extends React.Component {
    state = {
        pickedType: null
    }

    pickType = ({ target }) => {
        const val = target.value;
        this.setState({ pickedType: val })
    }
    closeAdd = ()=>{
        this.setState({pickedType: null})
    }
    render() {
        return (
            <React.Fragment>
                <section className="main-add-keeps">
                    <div className="add-keep-form">
                        <label>Pick Type:</label>
                        <select className="type-keep" onChange={this.pickType}>
                            {keepService.getTypes().map((type, idx) => <option key={idx} value={type}>{type}</option>)}
                        </select>
                        {this.state.pickedType && <AddByType typeChoose={this.state.pickedType} closeAdd={this.closeAdd} onLoad={this.props.onLoad}/>}
                    </div>
                </section>
                <hr />
            </React.Fragment>
        )
    }
}
