import KeepCover from './KeepCover.jsx';
export default class KeepTodos extends React.Component {
    state = {
        isCover: false
    }
    toggleCover = (ev) => {
        const val = ev.target.value
        if (val === 'true') {
            this.setState({ isCover: true })
        } else this.setState({ isCover: false })
        this.props.handle(ev)
    }
    render() {
        return (
            <React.Fragment>
                <select name="isCover" onChange={this.toggleCover}>
                    <option name="cover" value="false">WithOut Cover</option>
                    <option name="cover" value="true">With Cover</option>
                </select>
                {this.state.isCover && <KeepCover handle={this.props.handle} />}
                <div className="text-div">
                    <label htmlFor="title">Title: </label>
                    <input id="title" className="input-txt" type="text" name="title" onChange={this.props.handle} placeholder="title here" />
                    <label >Todos: </label>
                    <input type="text" className="input-txt" name="body" placeholder="enter comma separated list" onChange={this.props.handle} />
                </div>
            </React.Fragment>
        )
    }
}
