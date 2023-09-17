import { useState } from "react"
import "./task.css"

function Task(props) {
    const [status, setStatus] = useState("Pending")
    const [statusOption, setStatusOption] = useState(true)

    console.log("task is", props.task);
    function handleStatus() {
        if (statusOption == true) {
            setStatus("Completed")
            setStatusOption(false)
        }
        else {
            setStatus("Pending")
            setStatusOption(true)
        }
    }
    console.log("statusOption", statusOption);
    return (
        <div className="task">
            <h1>{props.id+1} : {props.task}</h1>
            <div className="status">
            status:{status}
            </div>
            <button className="status-button" onClick={handleStatus}>Update staus</button>
            <button className="remove-button" onClick={() => props.remove(props.id)}>Remove</button>
        </div>
    )
}
export default Task