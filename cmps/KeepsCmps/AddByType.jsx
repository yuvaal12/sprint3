import KeepCover from './KeepCover.jsx'
import KeepTodos from './KeepTodos.jsx';
import KeepText from './KeepText.jsx';
import keepService from '../../services/keepService.js'

export default class AddByType extends React.Component {
    state={
        note: null
    }

    handleInput = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(prevState => {
            return {
                note: {
                    ...prevState.note,
                    [field]: value
                }
            }
        })
    }
    saveKeep(ev){
        
    }
    getForm() {
        const typ = this.props.typeChoose
        console.log('type:', this.props.typeChoose);
        if (typ === 'text') {
            return (<KeepText />)
        } else if (typ === 'coverOnly') {
            return (<KeepCover />)
        } else if (typ === 'todos') {
            return (<KeepTodos />)
        }
    }
    render() {
        return (
            <React.Fragment>
                <form onSumbit={this.saveKeep}>
                    {this.getForm()}
                </form>
                <button>Add note</button>
            </React.Fragment>
        )
    }
}
