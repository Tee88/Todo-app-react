import React from 'react';
import Task from './task'

class TodoList extends React.Component {
    render() {
        const undoneTasks = this.props.taskList
            .map((task) => <Task
                key={task.id}
                id={task.id} // check again later
                title={task.title}
                status={task.done}
            />
            )
        return (
            <ul id="sortable" className="list-unstyled">
                {undoneTasks}
            </ul>
        )
    }
}

export default TodoList