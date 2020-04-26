
export default class LongTxt extends React.Component {
    state = {
        isLongShown: false,
        text: 'More?'
    }
    getText() {
        var text = this.props.text
        var bool = this.state.isLongShown
        if(bool){
            return text;
        }else return text.slice(0, 100)
    }
    toggleLong() {
        var bool = this.state.isLongShown
        console.log(bool);
        if (!bool) {
            this.setState({ 
                isLongShown: true,
                text: 'Less?'
            })

        }else this.setState({
             isLongShown: false,
             text: 'More?'
            })

    }
    render() {

        return (
            <p className="desc">
                {this.getText()}
                <button className="more-btn" onClick={() => this.toggleLong()}>{this.state.text}</button>
            </p>
        )
    }
}
