export default function SearchPreview(props) {
    return (
        <div className="single-search">
            {props.book.volumeInfo.title}
            <button className="add-from-list">Add</button>
        </div>
    )
}