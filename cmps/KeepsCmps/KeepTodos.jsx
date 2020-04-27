
export default class KeepTodos extends React.Component {
    render() {
        return (
            <React.Fragment>
                <select name="isCover" onChange={this.toggleCover,this.props.handle}>
                    <option  name="cover" value="false">WithOut</option>
                    <option  name="cover"  value="true">With</option>
                </select>
            </React.Fragment>
        )
    }
}
