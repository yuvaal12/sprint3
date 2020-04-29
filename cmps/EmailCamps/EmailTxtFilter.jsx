export default class EmailTxtFilter extends React.Component {
    state = {
        text: this.props,
    }
    getText = () => {
        var text = this.props.text
        if (text.length <= 10) return text
        return text.slice(0, 9) +'...'
    }


    render() {
        const longTxt = (this.state.isLong) ? '...' : ''

        return (
            <span>
                {this.getText()}
            </span>
        )
    }
}
