
export default class KeepCover extends React.Component {
    state = {
        input: null
    }
    getInput = ({ target }) => {
        let val = target.value
        if (val === 'url') {
            this.setState({
                input: <input type="text"  name="url" placeholder="http://example.com/" onChange={this.props.handle} />
            })
        } else {
            this.setState({
                input: <input type="file" name="file" onChange={this.props.handle}/>
            })
        }

    }
    render() {
        return (
            <React.Fragment>
                    <div>
                        <input type="radio" name="typeC" id="img" value="img" onClick={this.props.handle}/>
                        <label htmlFor="img">Img</label>
                        <input type="radio" name="typeC" id="video" value="video" onClick={this.props.handle}/>
                        <label htmlFor="video">video</label>
                        <input type="radio" name="typeC" id="audio" value="audio" onClick={this.props.handle}/>
                        <label htmlFor="audio">audio</label>
                    </div>
                    <div>
                        <input type="radio" name="linkT" id="url" value="url" onClick={this.getInput}/>
                        <label htmlFor="url">Url</label>
                        <input disabled type="radio" name="linkT" id="file" value="file" onClick={this.getInput}/>
                        <label htmlFor="file">File</label>
                    </div>
                    {this.state.input}
            </React.Fragment>
        )
    }
}
