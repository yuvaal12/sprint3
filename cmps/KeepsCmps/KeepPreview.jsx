import keepService from '../../services/keepService.js'

export default class KeepPreview extends React.Component {
    state = {
        keep: this.props.keep,
        type: this.props.keep.type,
        covered: this.props.keep.isCover,
        info: this.props.keep.info,
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
        console.log(this.state.keep);
        
        const coverd = this.state.covered
        if (coverd === false || coverd === 'false') return ''
        else {
            const coverType = this.state.keep.cover.typeC
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
        keepService.removeKeep(this.state.keep.id)
    }
    onChangeColor({target}){
        console.log(target.name);
        keepService.saveKeep(target.name,'bgColor',target.value)
    }
    render() {
 
        return (
            <div className="keep-card" style={{backgroundColor: this.props.keep.bgColor}}>
                <span>{this.isPinned()}</span>
                {this.getCover()}
                <h1>{this.getTitle()}</h1>
                {this.getInfo()}
                <hr />
                <section className="keep-tools">
                    <span onClick={() => this.onDel()}>Delete</span>
                    <span>Edit</span>
                    <input type="color" id="colorcade" name={this.props.keep.id}  className="hidden" onChange={this.onChangeColor}/>
                    <label htmlFor="colorcade" className="color-btn">Color</label>
                </section>
            </div>
        )
    }
}
