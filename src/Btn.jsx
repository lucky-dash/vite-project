export function Btn(props) {
  return (
    <button onClick={props.onClick} className="bg-amber-400 rounded-2xl  py-2">
      {props.title}
    </button>
  );
}
//which funtion return jsx is called component
