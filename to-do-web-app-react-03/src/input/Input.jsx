import "./input.css"
function Input(props) {
    return (
        <div id="task-input">
            <input value={props.val} onChange={props.change} type="text" placeholder="Write your task" />
            <button onClick={props.click}>Add</button>
        </div>
    )
}
export default Input