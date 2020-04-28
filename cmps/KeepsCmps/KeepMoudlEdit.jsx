import keepService from '../../services/keepService.js'
export default class KeepMoudlEdit extends React.Component {

    onEdit =() =>{
        this.props.onClose()
        this.props.onLoad()
    }
    changeUrl = ({target}) =>{
        var keep = this.props.pickedKeep
        keep.cover.url = target.value
        keepService.saveKeep(keep.id, 'cover', keep.cover)
    }
    changeTitle =({target}) =>{
        var keep = this.props.pickedKeep
        keep.info.title = target.value
        keepService.saveKeep(keep.id, 'info', keep.info)
    }
    addTodo = () =>{
        var keep = this.props.pickedKeep
        keep.info.body.push({txt:target.value})
        keepService.saveKeep(keep.id, 'info', keep.info)
    }
    getCoverInfo() {
        var cover = this.props.pickedKeep.cover
        if (cover) {
            return (
                <div>
                    <h4>Cover Type: <span className="values">{cover.typeC}</span></h4>
                    <input name="url"  placeholder={cover.url} className="url-edit" onChange={this.changeUrl}/>
                </div>
            )
        } else return ''
    }
    getBodyInfo() {
        var info = this.props.pickedKeep.info
        if (info) {
            if (this.props.pickedKeep.type === 'todos') {
                var text = '';
                info.body.forEach(todo => {
                    console.log(todo.txt);
                    text += '◆' + todo.txt + ' '
                })
            } else if (this.props.pickedKeep.type === 'text') {
                text = info.body
            }
            console.log(text);
            return (
                <div>
                    <h4>Title: <input name="title"  placeholder={info.title}  onChange={this.changeTitle}/></h4>
                    <h4>Todos: <span className="todos-edit values">{text}</span></h4>
                    <input name="todos" placeholder="add todos sepread by comma" onChange={this.addTodo}/>
                </div>
            )
        } else return ''
    }
    render() {
        var keep = this.props.pickedKeep
        return (
            <div className="moudle-edit">
                <h2>ID: <span className="values">{keep.id}</span></h2>
                <h4>Type: <span className="values">{keep.type}</span></h4>
                <section className="edit-section">
                    {this.getCoverInfo()}
                    {this.getBodyInfo()}
                </section>
                <span className="tool-btn" onClick={this.onEdit}>Edit</span>
            </div>
        )
    }
}
