
type Props = {
    task: string
    borrarTarea: () => void
}

export const Task = ({ task, borrarTarea }: Props) => {
    return (
        <div className="task">
            <span>{task}</span>
            <button onClick={borrarTarea}>Delete</button>
        </div>
    )
}