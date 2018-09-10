import React from 'react';

class ItemsLeft extends React.Component {

    render() {
        return (
            <div className="todo-footer">
                <strong><span className="count-todos">{this.props.tasksLeft}</span></strong> Items Left
            </div>
        )
    }
}

export default ItemsLeft