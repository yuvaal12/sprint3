const { Link } = ReactRouterDOM

export default function BookPreview(props) {
    const { book } = props
    const priceList = book.listPrice

    function getCurr(curr){
        var c = curr.toLowerCase();
        switch(c){
            case 'eur':
                return '€'
            case 'usd':
                return '$'
            case 'ils':
                return '₪'
        }
    }
    return (
        <Link className="linkTo" to={`/book/${book.id}`}><article className="book-preview">
            <h1 className="book-title">{book.title}</h1>
            <img src={`${book.thumbnail}`} alt={`error with - ${book.title} - img`} />
            <div className="pricing">
                Price:
                <span>{priceList.amount}</span>
                <span>{getCurr(priceList.currencyCode)}</span>
            </div>
        </article></Link>
    )
}