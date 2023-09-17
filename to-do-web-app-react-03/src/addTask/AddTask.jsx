import { useState } from "react"
import Task from "../task/Task"
import Input from "../input/Input"
import "./addTask.css"
import { BiRefresh } from "react-icons/bi"

function AddTask() {
    const [inputValue, setInputValue] = useState("")
    const [task, setTask] = useState([])

    console.log(inputValue)

    function handleChange(e) {
        setInputValue(e.target.value)
    }

    // Handle task
    function handleTask() {
        if (inputValue != "") {
            console.log("button clicked");
            setTask((s) =>
                [...s, inputValue]
            )
            setInputValue("")
        }
        else{
            alert("Please, add some task first")
        }
    }

    console.log(task);
    function handleRemove(id) {
        setTask(
            (s) => s.filter((e, i) => {
                return i != id
            })
        )
    }

    function removeAll() {
        setTask([])
        setInputValue("")
    }

    return (
        <div id="main-div">
            <div className="task-adding-section">
                <Input click={handleTask} change={handleChange} val={inputValue} />
                <BiRefresh onClick={removeAll} className="refresh-icon" />
            </div>

            <div className="parent-task">
                {task.map((e, i) =>
                    <Task remove={handleRemove} key={i} task={e} id={i} />
                )}
            </div>
        </div>
    )
}
export default AddTask