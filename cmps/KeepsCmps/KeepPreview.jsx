import keepService from '../../services/keepService.js'

export default class KeepPreview extends React.Component {
    componentDidMount() {
        console.log(this.props);

    }

    getInfo() {
        const { info, type } = this.props.keep
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
        const { type } = this.props.keep
        var title = ''
        if (type !== 'coverOnly') {
            title = this.props.keep.info.title
        }
        return title;
    }
    getCover() {
        const isCovered = this.props.keep.cover
        if (!isCovered) return ''
        else {
            const coverType = this.props.keep.cover.typeC
            switch (coverType) {
                case 'img':
                    return (
                        <img src={`${this.props.keep.cover.url}`} />
                    )
                case 'video':
                    return (
                        <video controls src={`${this.props.keep.cover.url}`} />
                    )
                case 'audio':
                    return (
                        <audio src={`${this.props.keep.cover.url}`} controls />
                    )
                case 'map':
                    return (
                        <p>map here</p>
                    )
            }
        }
    }
    isPinned() {
        var isPinned = this.props.keep.isPinned
        if (isPinned) return 'PINNED!'
        else return ''
    }
    onDel() {
        this.props.onDelete(this.props.keep.id)
    }
    onChangeColor = ({ target }) => {
        const name = target.name
        const value = target.value
        keepService.saveKeep(name, 'bgColor', value)
    }
    render() {

        return (
            <div className="keep-card" style={{ backgroundColor: this.props.keep.bgColor }}>
                <span>{this.isPinned()}</span>
                {this.getCover()}
                <h1>{this.getTitle()}</h1>
                {this.getInfo()}
                <hr />
                <section className="keep-tools">
                    <span onClick={() => this.onDel()}>Delete</span>
                    <span>Edit</span>
                <input type="color" id={`colorcade${this.props.keep.id}`} name={this.props.keep.id} className="hidden" onChange={this.onChangeColor} />
                    <label htmlFor={`colorcade${this.props.keep.id}`} className="color-btn">Color</label>
                </section>
            </div>
        )
    }
}
