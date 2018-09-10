import React from 'react';
import Task from './task'

class TodoList extends React.Component {
    onDoneClick = (attr) => {
        this.props.done(attr);
    }
    render() {
        const undoneTasks = this.props.taskList
            .map((task) => <Task
                key={task.id}
                id={task.id} // check again later
                title={task.title}
                status={task.done}
                onDoneClick={this.onDoneClick}
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