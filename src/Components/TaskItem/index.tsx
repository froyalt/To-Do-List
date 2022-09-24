import "./style.css";

interface TaskItemProps {
  title: string;
  done?: boolean;
  remove?: boolean;
  finishTask: () => void;
  removeTask: () => void;
}

export default function TaskItem(props: TaskItemProps) {
  return (
    <li
      className={`d-flex justify-content-between task-item ${
        props.done ? "done" : ""
      }`}
      id={`${props.remove ? "remove" : ""}`}
    >
      <span className="button-remove" onClick={props.removeTask}>
        ❌
      </span>
      <p className="text-break">{props.title}</p>
      <span onClick={props.finishTask}>✅</span>
    </li>
  );
}
