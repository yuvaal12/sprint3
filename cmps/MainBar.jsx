

export default class MainBar extends React.Component {
    state = {
        classMid: '',
        classUp: '',
        classDown: ''
    }
    onMenuClick = () => {
        this.props.onToggle()
        if (this.state.classMid === '') {
            this.setState({
                classMid: 'middle-line',
                classUp: 'up-line',
                classDown: 'down-line'
            })
        } else {
            this.setState({
                classMid: '',
                classUp: '',
                classDown: ''
            })
        }
    }
    render() {
        return (
            <nav>
                <div className="navBar">
                    <a href="/index.html#/">
                            <img className="logo-img" src="assets/img/logo.png" alt=""></img>
                    </a>
                    <a className="open-menu flex" onClick={this.onMenuClick}>
                        <span className={`line-menu ${this.state.classUp}`}>___</span>
                        <span className={`line-menu ${this.state.classMid}`}>___</span>
                        <span className={`line-menu ${this.state.classDown}`}>___</span>
                    </a>
                </div>
            </nav>
        )
    }
}
