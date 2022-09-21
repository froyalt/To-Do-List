import "./style.css"


interface TaskItemProps {
    title: string;
    done?: boolean;
    finishTask: () => void;
}

export default function TaskItem(props:TaskItemProps){
    return(
        <li className={`d-flex justify-content-between task-item ${props.done ? "done" : ""}`}>
            <span id="button-remove">❌</span>
            <p>{props.title}</p>
            <span onClick={props.finishTask}>✅</span>
        </li>
    )
}