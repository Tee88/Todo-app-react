import React from 'react';
import { connect } from 'react-redux'
import { deleteTask, finishTask } from '../actions'

class Task extends React.Component {
    onDone = () => {
        this.props.onDoneClick(this.props.id)
    }
    onDelete = () => {
        this.props.onDeleteClick(this.props.id)
    }
    render() {
        if (!this.props.status) {
            return (
                <li className="ui-state-default">
                    {this.props.title}<button className="remove-item btn btn-default btn-xs pull-right" onClick={this.onDone}><span className="glyphicon glyphicon-check"></span></button>
                </li>
            )
        } else {
            return (
                <li>{this.props.title}<button className="remove-item btn btn-default btn-xs pull-right" onClick={this.onDelete}><span className="glyphicon glyphicon-remove"></span></button></li>
            )
        }
    }
}

    
const mapDispatchToProps = dispatch => ({
    onDeleteClick: id => dispatch(deleteTask(id)),
    onDoneClick: id => dispatch(finishTask(id))
})

export default connect(null, mapDispatchToProps)(Task)