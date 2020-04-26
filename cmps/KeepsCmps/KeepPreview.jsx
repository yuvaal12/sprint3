
export default class KeepPreview extends React.Component {
    state = {
        type: this.props.keep.type,
    }

    getTitle() {
        const typ = this.state.type
        var title = ''
        if (typ !== 'imgOnly') {
            title = this.props.keep.info.title
        }
        return title;
    }
    render() {
        const {keep} = this.props.keep
        return (
            <div>
                <span></span>
                <h1>{this.getTitle()}</h1>
            </div>
        )
    }
}
