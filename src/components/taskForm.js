import React from 'react';
const uuidv1 = require('uuid/v4');

class TaskForm extends React.Component {
    state = {
        title: ''
    }

    handleChange = (e) => {
        this.setState({ title: e.target.value })
    }

    handleCreateTask = (e) => {
        if (this.state.title === ''){
            return
        }
        this.props.createTask({
            id: uuidv1(),
            title: this.state.title,
            done: false
        })
        e.preventDefault();
        this.setState({ title: '' })
    }

    handleAllDone = () =>{
        this.props.allDone()
    }

    render() {
        return (
            <form onSubmit={this.handleCreateTask}>
                <input
                    type="text"
                    className="form-control add-todo"
                    placeholder="Add todo"
                    value={this.state.title}
                    onChange={this.handleChange}

                />
                <button type="button" id="checkAll" className="btn btn-success" onClick={this.handleCreateTask} >Create Task</button>
                <button type="button" id="checkAll" className="btn btn-success pull-right" onClick={this.handleAllDone} >Mark All As Done</button>
                <hr />
            </form>
        )
    }
}

export default TaskForm