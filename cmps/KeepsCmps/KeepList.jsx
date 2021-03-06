import KeepPreview from './KeepPreview.jsx'

export default function KeepList (props) {
        return (
            <div className="keep-list">
                { props.keeps.map(keep => <KeepPreview onDelete={props.onDelete} key={ keep.id } keep={ keep } onLoad={props.onLoad}/>) }
            </div>
        )
    }