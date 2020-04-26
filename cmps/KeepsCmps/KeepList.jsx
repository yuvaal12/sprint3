import KeepPreview from './KeepPreview.jsx'

export default function KeepList (props) {
        return (
            <div className="keep-list">
                { props.keeps.map(keep => <KeepPreview  key={ keep.id } keep={ keep } />) }
            </div>
        )
    }