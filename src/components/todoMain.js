import React from 'react';
import TodoList from './todoList'
import TaskForm from './taskForm'
import ItemsLeft from './itemsLeft'
class TodoMain extends React.Component {
    newTask = (attr) => {
        this.props.createNewTask(attr)
    }

    render() {
        const undoneCount = this.props.tasks.length
        return (
            <div className="todolist not-done">
                <h1>Todos</h1>
                <TaskForm createTask={this.newTask} allDone={this.props.onAllDone}/>
                <TodoList taskList={this.props.tasks} />
                <ItemsLeft tasksLeft={undoneCount} />
            </div>

        )
    }
}

export default TodoMain