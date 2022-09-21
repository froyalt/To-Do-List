interface TaskContainerProps{
    children: JSX.Element | JSX.Element[]
}
export default function TaskContainer(props: TaskContainerProps){
    return <ul className="container"> {props.children} </ul>
}