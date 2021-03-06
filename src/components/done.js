import React from 'react';
import Task from './task'

class Done extends React.Component {
    render() {
        const doneTasks = this.props.tasks
            .map((task) => <Task
                key={task.id}
                id={task.id} // check again later
                title={task.title}
                status={task.done}
            />
            )
        return (
            <div className="todolist">
                <h1>Already Done</h1>
                <ul id="done-items" className="list-unstyled">
                    {doneTasks}
                </ul>
            </div>
        )
    }
}

export default Done