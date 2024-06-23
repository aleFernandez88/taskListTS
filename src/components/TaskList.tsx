import { Task } from "./Task"

// agrego lo que vamos a recibir
type Props = {
    // una lista de tipo de array de string
    listaTareas: string[]
    // una funcion que recibe un tipo number y no retorna nada.
    borrarTarea: (index: number) => void
}

export const TaskList = ({ listaTareas, borrarTarea }: Props) => {
    return (
        <div className="taskList">
            {listaTareas.map((task, index) => (
                <Task
                    key={index}
                    task={task}
                    borrarTarea={() => borrarTarea(index)}
                />
            ))
            }
        </div>
    )
}