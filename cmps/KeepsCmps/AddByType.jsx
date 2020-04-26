import KeepCoverOnly from './KeepCoverOnly.jsx'
import KeepTodos from './KeepTodos.jsx';
import KeepText from './KeepText.jsx';
export default class AddByType extends React.Component {
    state = {
        type: this.props.typeChoose
    }

    getForm() {
        const typ = this.state.type
        console.log('type:', typ);
        if(typ === 'text'){
            return (<KeepText.jsx />)
        }else if (typ === 'coverOnly') {
            return (<KeepCoverOnly />)
        } else if (val === 'todos') {
            return (<KeepTodos.jsx />)
        }
    }
    render() {
        return (
            <React.Fragment>
                {this.getForm()}
                <button>Add note</button>
            </React.Fragment>
        )
    }
}
