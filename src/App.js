import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoMain from './components/todoMain'
import Done from './components/done'
const uuidv4 = require('uuid/v4');
// import uuidv4 from 'uuid'

class App extends Component {

    state = {
        tasks: [
            {
                id: uuidv4(),
                title: 'take the trash out',
                done: false,
            },
            {
                id: uuidv4(),
                title: 'buy bread',
                done: false,
            },
            {
                id: uuidv4(),
                title: 'call Dad',
                done: true,
            },
            {
                id: uuidv4(),
                title: 'buy ps4',
                done: true,
            }
        ],
    }

    handleDoneTask = (attr) => {
        this.setState({
            tasks: this.state.tasks.map((task) => {
                if (attr.id === task.id) {
                    return Object.assign({}, task, {
                        done: true,
                    })
                } else {
                    return task;
                }
            })
        })
    }

    handleDeletedTask = (attr) => {
        this.setState({
            tasks: this.state.tasks.filter((task) => {
                return (attr.id !== task.id)
            })
        })
    }

    handleCreateTask = (task) => {
        this.setState({ tasks: this.state.tasks.concat(task) })
    }

    handleAllDone = () => {
        this.setState({
            tasks: this.state.tasks.map((task)=>{
                task.done = true;
                return task
            })
        });
    }

    render() {
        const undone = this.state.tasks.filter((task) => {
            return !task.done;
        })

        const done = this.state.tasks.filter((task) => {
            return task.done;
        })
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <TodoMain tasks={undone} onDone={this.handleDoneTask} createNewTask={this.handleCreateTask} onAllDone={this.handleAllDone} />
                    </div>
                    <div className="col-md-6">
                        <Done tasks={done} delete={this.handleDeletedTask} />
                    </div>
                </div>
            </div>

        )
    }
}

export default App
