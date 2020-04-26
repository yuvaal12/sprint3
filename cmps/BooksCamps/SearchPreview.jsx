import BookService from '../../services/BookService.js'
import { eventBus } from '../../services/eventBusService.js'

export default function SearchPreview(props) {
    var text = '...';
    var toShow = false;
    var name = props.book.volumeInfo.title
    if (name.length > 60 && !toShow) {
        var title = name.slice(0, 60)
        text = '...';
    } else {
        var title = name;
        text = '';
    }
    function toggleShow(){
        toShow = (toShow)? false : true;
    }
    function addBook(){
        var newbook = BookService.addGoogleBook(props.book)
        eventBus.emit('show-msg', { txt: props.book.volumeInfo.title + ' Added Successfully!', id: newbook.id, path: '/book/'})
    }
    return (
        <div className="single-search">
            <div onClick={toggleShow}>
                {title}<span className="more-title">{text}</span>
            </div>
            <button className="add-from-list" onClick={addBook}>Add</button>
        </div>
    )
}