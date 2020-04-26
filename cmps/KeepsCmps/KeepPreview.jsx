import keepService from '../../services/keepService.js'

export default class KeepPreview extends React.Component {
    state = {
        keep: this.props.keep,
        type: this.props.keep.type,
        covered: this.props.keep.isCover,
        info: this.props.keep.info
    }
    getInfo() {
        const { info, type } = this.state
        const body = info.body
        if (type !== 'coverOnly') {
            switch (type) {
                case 'todos':
                    return (
                        body.map(todo =>
                            <div key={todo.id}>
                                <input type="checkbox" id={todo.txt} name={todo.txt} />
                                <label htmlFor={todo.txt}>{todo.txt}</label>
                            </div>
                        )
                    );
                case 'text':
                    return body;
            }
        }

    }
    getTitle() {
        const typ = this.state.type
        var title = ''
        if (typ !== 'coverOnly') {
            title = this.props.keep.info.title
        }
        return title;
    }
    getCover() {
        const coverd = this.state.covered
        if (coverd === false) return ''
        else {
            const coverType = this.state.keep.cover.type
            switch (coverType) {
                case 'img':
                    return (
                        <img src={`${this.state.keep.cover.url}`} />
                    )
                case 'video':
                    return (
                        <video controls src={`${this.state.keep.cover.url}`} />
                    )
                case 'audio':
                    return (
                        <audio src={`${this.state.keep.cover.url}`} controls />
                    )
                case 'map':
                    return (
                        <p>map here</p>
                    )
            }
        }
    }
    isPinned() {
        var bool = this.state.keep.isPinned
        if (bool) return 'PINNED!'
        else return ''
    }
    onDel() {
        console.log(this.state.keep.id);
        keepService.removeKeep(this.state.keep.id)
    }

    render() {
        const { keep } = this.props.keep
        return (
            <div className="keep-card">
                <span>{this.isPinned()}</span>
                {this.getCover()}
                <h1>{this.getTitle()}</h1>
                {this.getInfo()}
                <hr />
                <section className="keep-tools">
                    <span onClick={() => this.onDel()}>Delete</span>
                    <span>Edit</span>
                    <span>Color</span>
                </section>
            </div>
        )
    }
}
