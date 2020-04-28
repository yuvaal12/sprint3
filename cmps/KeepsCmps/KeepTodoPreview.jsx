import keepService from '../../services/keepService.js'
export default class KeepTodoPreview extends React.Component {
    getClessDone() {
        var { todo } = this.props
        if (todo.doneAt) return 'todo-done'
        else return ''
    }

    getTimeDone() {
        var ms = this.props.todo.doneAt
        console.log(ms);
        if (ms) {
            var time = Date(ms)
            time.toString()
            return time
        } else return ''
    }

    onDone = ({ target }) => {
        const id = target.id
        const chx = target.checked
        keepService.getKeepById(this.props.keep.id)
            .then((keep)=>{
                const todo = keep.info.body.find(todo => todo.id === id);
                if(chx) todo.doneAt = Date.now()
                else todo.doneAt = null
                keepService.saveKeep(this.props.keep.id, 'info', keep.info)
            })
        this.props.onLoad()

    }

    getCheckBox() {
        var { todo } = this.props
        if (todo.doneAt) {
            return (
                <input type="checkbox" id={todo.id} className="hidden" defaultChecked name={todo.txt} onChange={this.onDone} />
            )
        } else {
            return (<input type="checkbox" id={todo.id} className="hidden" name={todo.txt} onChange={this.onDone} />)
        }
    }

    render() {
        var { todo } = this.props
        return (
            <div className="todo" >
                {this.getCheckBox()}
                <label htmlFor={todo.id} className={`${this.getClessDone()} todo-label`}>{todo.txt} <span className="note-date">{this.getTimeDone()}</span></label>
            </div>
        )
    }
}
