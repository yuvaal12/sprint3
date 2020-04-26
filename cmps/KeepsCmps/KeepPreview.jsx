
export default class KeepPreview extends React.Component {
    state = {
        keep: this.props.keep,
        type: this.props.keep.type,
        covered: this.props.keep.isCover
    }

    getTitle() {
        const typ = this.state.type
        var title = ''
        if (typ !== 'imgOnly') {
            title = this.props.keep.info.title
        }
        return title;
    }
    getCover() {
        const coverd = this.state.covered
        if (coverd === false) return ''
        else {
            const coverType = this.state.keep.cover.type
            switch(coverType)
            {
                case 'img':
                    return (
                        <img src={`${this.state.keep.cover.url}`} />
                    )
                case 'video':
                    return (
                        <video  controls src={`${this.state.keep.cover.url}`}/>
                    )
                case 'audio':
                    return (
                        <audio src={`${this.state.keep.cover.url}`} controls/>
                    )
            }
        }
    }
    render() {
        const { keep } = this.props.keep
        return (
            <div className="keep-card">
                {this.getCover()}
                <h1>{this.getTitle()}</h1>
            </div>
        )
    }
}
