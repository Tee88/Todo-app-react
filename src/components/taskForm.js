import React from 'react';
import { connect } from 'react-redux'
import { newTask, updateTodoTitle, markAllAsDone } from '../actions'

class TaskForm extends React.Component {
    // state = {
    //     title: ''
    // }

    handleChange = (e) => {
        // this.setState({ title: e.target.value })
        this.props.updateTodoTitle(e.target.value)
    }

    handleCreateTask = (e) => {
        if (this.props.title === ""){
            return
        }
        console.log('this.props.title', this.props.title);
        this.props.createTask(this.props.title)
        e.preventDefault();
        this.props.updateTodoTitle('')
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
                    value={this.props.title}
                    onChange={this.handleChange}

                />
                <button type="button" id="checkAll" className="btn btn-success" onClick={this.handleCreateTask} >Create Task</button>
                <button type="button" id="checkAll" className="btn btn-success pull-right" onClick={this.handleAllDone} >Mark All As Done</button>
                <hr />
            </form>
        )
    }
}

const mapStateToProps = state => ({
    title: state.newTodoTitle
})

const mapDispatchToProps = dispatch => ({
    updateTodoTitle: title => dispatch(updateTodoTitle(title)),
    allDone: () => dispatch(markAllAsDone()),
    createTask: task => dispatch(newTask(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm)