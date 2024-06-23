import { useState } from "react"
import { TaskList } from "./TaskList"

export const TodoApp = () => {
    const [nuevaTarea, setNuevaTarea] = useState<string>("")
    const [listaTareas, setListaTareas] = useState<string[]>([])
    const handleAddTask = () => {
        //si nueva tarea esta vacia, sale con return
        if (nuevaTarea.trim() === '') return
        //se agrega nueva tarea a todo lo q haya antes
        setListaTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea])
        //se limpia el input para que no siga agregando la misma tarea varias veces por error.
        setNuevaTarea('')
    }

    const handleDeleteTask = (index: number) => {
        setListaTareas(tareas => tareas.filter((_, i) => i !== index))
    }
    return (
        <div>
            <h1>Task List</h1>
            <div>
                <input
                    type="text"
                    value={nuevaTarea}
                    onChange={e => setNuevaTarea(e.target.value)}
                    placeholder="Nueva tarea"
                />
                <button
                    onClick={handleAddTask}
                >
                    Add Task
                </button>
            </div>
            <TaskList
                listaTareas={listaTareas}
                borrarTarea={handleDeleteTask} />
        </div>
    )
}