import keepService from '../../services/keepService.js'

export default class KeepPreview extends React.Component {

    state ={
        pin: this.getPinIcon()
    }
    componentDidMount() {
        console.log('oros:', this.props);

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
                        <iframe src={`${this.props.keep.cover.url}`} allowFullScreen></iframe>
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
        if (isPinned) return '📌'
        else return ''
    }
    onDel() {
        this.props.onDelete(this.props.keep.id)
    }
    getPinIcon(){
        var isPinned = this.props.keep.isPinned
        if (isPinned) return 'pin-yes.png'
        else return 'pin-no.png'
    }
    onChangeColor = ({ target }) => {
        const id = target.name
        const value = target.value
        keepService.saveKeep(id, 'bgColor', value)
        this.props.onLoad()
    }
    onTextChangeColor = ({ target }) => {
        const id = target.name
        const value = target.value
        keepService.saveKeep(id, 'textColor', value)
        this.props.onLoad()
    }
    render() {

        return (
            <div className="keep-card" style={{ backgroundColor: this.props.keep.bgColor }}>
                <span className="pin">{this.isPinned()}</span>
                {this.getCover()}
                <h1>{this.getTitle()}</h1>
                <span style={{ color: this.props.keep.textColor }}>{this.getInfo()}</span>
                <section className="keep-tools">
                    <span onClick={() => this.onDel()} className="tool-btn"><img className="icon-tool" src="../../assets/icons/trash.png" /></span>
                    <span onClick={() => this.onSend()} className="tool-btn"><img className="icon-tool" src="../../assets/icons/email-icon.png" /></span>
                    <span onClick={() => this.onPin()} className="tool-btn"><img className="icon-tool" src={`../../assets/icons/${this.state.pin}`} /></span>
                    <span className="tool-btn"><img className="icon-tool" src="../../assets/icons/edit-icon.png" /></span>
                    <input type="color" id={`colorcade${this.props.keep.id}`} name={this.props.keep.id} className="hidden" onChange={this.onChangeColor} />
                    <label htmlFor={`colorcade${this.props.keep.id}`} className="tool-btn"><img className="icon-tool" src="../../assets/icons/paint-bg.png" /></label>
                    <input type="color" id={`textColorcade${this.props.keep.id}`} name={this.props.keep.id} className="hidden" onChange={this.onTextChangeColor} />
                    <label htmlFor={`textColorcade${this.props.keep.id}`} className="tool-btn"><img className="icon-tool" src="../../assets/icons/text-color.png" /></label>
                </section>
            </div>
        )
    }
}
