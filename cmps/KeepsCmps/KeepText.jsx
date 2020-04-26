import KeepCover from './KeepCover.jsx';
export default class KeepText extends React.Component {
    state = {
        isCover: false
    }
    toggleCover = ({ target }) => {
        const val = target.value
        console.log(val);
        if (val === 'with') {
            this.setState({ isCover: true })
        } else this.setState({ isCover: false })
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <input type="radio" name="cover" id="without" value="without" onClick={this.toggleCover}/>
                    <label htmlFor="without">without</label>
                    <input type="radio" name="cover" id="with" value="with" onClick={this.toggleCover}/>
                    <label htmlFor="with">With</label>
                </div>
                {this.state.isCover && <KeepCover />}
                <div>
                    <label htmlFor="titleKeep">Title:</label>
                    <input id="titleKeep" type="text" name="titleKeep"/>
                    <label htmlFor="textKeep">text:</label>
                    <input id="textKeep" type="text" name="textKeep"/>
                </div>
            </React.Fragment>
        )
    }
}
