import LongTxt from '../cmps/LongTxt.jsx'
export default class BookDetails extends React.Component {
    state = {
        class: ''
    }
    componentDidMount() {
        this.getPriceColor()
           
    }
    getTime(){
        var nowYear =new Date().getFullYear()
        var year = this.props.book.publishedDate
        if(nowYear - year <1 ) return 'New!'
        if(nowYear - year > 10 ) return 'Old fart!'
    }
    getCurr() {
        var c = this.props.book.listPrice.currencyCode.toLowerCase();
        switch (c) {
            case 'eur':
                return '€'
            case 'usd':
                return '$'
            case 'ils':
                return '₪'
        }
    }
    getPriceColor() {
        var price = this.props.book.listPrice.amount
        if (price < 20) this.setState({ class: 'green' });
        if (price > 150) this.setState({ class: 'red' });
    }
    getLength(){
        var length = this.props.book.pageCount
        if(length > 500) return 'Long reading'
        if(length > 200) return 'Decent  reading'
        if(length < 100) return 'Light  reading'
    }
    isSale(){
        var sale = this.props.book.listPrice.isOnSale
        if(sale) return 'SALE!!'
    }
    isLong(){

    }

    render() {
        const { book, onBack } = this.props
        return (
            <section>
                <button onClick={onBack}>Back</button>
                <div className="book-det">
                    <h1 className="book-title">{book.title}</h1>
                    <span className="sub-title">{book.subtitle}</span>
                    <span>ID: {book.id}</span>
        <span>Price: <span className={this.state.class}>{book.listPrice.amount}{this.getCurr()}</span>  <span className="sell">{this.isSale()}</span></span>
                    <img src={`${book.thumbnail}`} alt={`error with - ${book.title} - img`} />
                    <span>Authors:  {book.authors}</span>
                    <span>Published At:  {book.publishedDate} <span> - {this.getTime()}</span></span>
                    <span>Pages:  {book.pageCount} <span> - {this.getLength()}</span></span>
                    <span>language:  {book.language}</span>
                    <span>Categories:  {book.categories}</span>
                    <LongTxt text={book. description}/> 
                    <button onClick={() => this.props.onDelete(book.id)}>Delete</button>
                </div>
            </section>
        )
    }
}