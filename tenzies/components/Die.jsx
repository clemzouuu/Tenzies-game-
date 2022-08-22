export default function Die (props) {
    return (
      <div className="die-face">
        <p className="die-num">{props.value}</p>
      </div>
    )
}