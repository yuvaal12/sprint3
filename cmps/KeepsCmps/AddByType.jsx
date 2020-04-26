
export default class AddByType extends React.Component {
    state = {
        type: this.props.typeChoose,
        input: null
    }
    getInput({target}){
        let val = target.value
        
    }

    getForm() {
        const typ = this.state.type
        console.log('type:', typ);
        if (typ === 'coverOnly') {
            return (
                <React.Fragment>
                    <div>
                        <input type="radio" name="coverT" id="img" value="img"/>
                        <label htmlFor="img">Img</label>
                        <input type="radio" name="coverT" value="video"/>
                        <label htmlFor="video">video</label>
                        <input type="radio" name="coverT" value="audio"/>
                        <label htmlFor="audio">audio</label>
                    </div>
                    <div>
                    <input type="radio" name="linkT" id="url" value="url"/>
                        <label htmlFor="url">Url</label>
                        <input type="radio" name="linkT" id="file" value="file"/>
                        <label htmlFor="file">File</label>
                    </div>
                </React.Fragment>
            )
        }
    }
    render() {
        return (
            <form>
                {this.getForm()}
            </form>
        )
    }
}
