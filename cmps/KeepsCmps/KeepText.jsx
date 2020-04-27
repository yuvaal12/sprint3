import KeepCover from './KeepCover.jsx';
export default class KeepText extends React.Component {
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
                    <option  name="cover" value=""></option>
                    <option  name="cover" value="false">WithOut</option>
                    <option  name="cover"  value="true">With</option>
                </select>
                {this.state.isCover && <KeepCover handle={this.props.handle}/>}
                <div>
                    <label htmlFor="title">Title:</label>
                    <input id="title" type="text" name="title" onChange={this.props.handle}/>
                    <label htmlFor="body">text:</label>
                    <input id="body" type="text" name="body" onChange={this.props.handle}/>
                </div>
            </React.Fragment>
        )
    }
}
