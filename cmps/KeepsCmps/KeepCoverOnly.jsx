
export default class KeepCoverOnly extends React.Component {
    state = {
        input: null
    }
    getInput = ({ target }) => {
        let val = target.value
        if (val === 'url') {
            this.setState({
                input: <input type="text" placeholder="http://example.com" />
            })
        } else {
            this.setState({
                input: <input type="file" />
            })
        }

    }
    render() {
        return (
            <React.Fragment>
                <form>
                    <div>
                        <input type="radio" name="coverT" id="img" value="img" />
                        <label htmlFor="img">Img</label>
                        <input type="radio" name="coverT" id="video" value="video" />
                        <label htmlFor="video">video</label>
                        <input type="radio" name="coverT" id="audio" value="audio" />
                        <label htmlFor="audio">audio</label>
                    </div>
                    <div>
                        <input type="radio" name="linkT" id="url" value="url" onClick={this.getInput} />
                        <label htmlFor="url">Url</label>
                        <input type="radio" name="linkT" id="file" value="file" onClick={this.getInput} />
                        <label htmlFor="file">File</label>
                    </div>
                    {this.state.input}
                </form>
            </React.Fragment>
        )
    }
}
