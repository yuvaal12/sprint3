import KeepCover from './KeepCover.jsx'
import KeepTodos from './KeepTodos.jsx';
import KeepText from './KeepText.jsx';
import keepService from '../../services/keepService.js'

export default class AddByType extends React.Component {
    state = {
        note: {
            type: this.props.typeChoose
        }
    }

    handleChange = ({ target }) => {
        console.log(target.name, ':', target.value);
        const field = target.name
        const value = target.value
        this.setState(prevState => ({ note: { ...prevState.note, [field]: value } }))
    }
    saveKeep = () => {

        var note = this.state.note
        keepService.addKeep(note)
        this.props.load()
    }

    getForm() {
        const typ = this.props.typeChoose
        if (typ === 'text') {
            return (<KeepText handle={this.handleChange} />)
        } else if (typ === 'coverOnly') {
            return (<KeepCover handle={this.handleChange} />)
        } else if (typ === 'todos') {
            return (<KeepTodos handle={this.handleChange} />)
        } else return ''
    }
    ען
    render() {
        return (
            <React.Fragment>
                <form onSumbit={this.saveKeep}>
                    {this.getForm()}
                </form>
                <button onClick={this.saveKeep}>Add note</button>
            </React.Fragment>
        )
    }
}
