
export default class KeepTodos extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <input type="radio" name="cover" id="no" value="no" />
                    <label htmlFor="no">without</label>
                    <input type="radio" name="cover" id="yes" value="yes" />
                    <label htmlFor="yes">With</label>
                </div>
            </React.Fragment>
        )
    }
}
