import KeepCover from './KeepCover.jsx'
import KeepTodos from './KeepTodos.jsx';
import KeepText from './KeepText.jsx';
import keepService from '../../services/keepService.js'

export default class AddByType extends React.Component {

    onSumbit(){
        
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
                <form>
                    {this.getForm()}
                </form>
                <button onClick={this.onSumbit}>Add note</button>
            </React.Fragment>
        )
    }
}
