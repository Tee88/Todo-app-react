import React from 'react';

class Task extends React.Component {
    onDone = () => {
        this.props.onDoneClick({ id: this.props.id })
    }
    onDelete = () => {
        this.props.onDeleteClick({ id: this.props.id })
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

export default Task