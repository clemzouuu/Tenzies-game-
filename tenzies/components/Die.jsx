export default function Die (props) {
    let isItHeld = {
      background: props.isItHeld ? 'green' : '',
    }

    return (
      <div className="die-face"  
      onClick={props.toggle}
      style={isItHeld}
      >
        <p className="die-num">{props.value}</p>
      </div>
    )
}