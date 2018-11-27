const ADD_TASK =  "ADD_TASK"
const DELETE_TASK = "DELETE_TASK"
const FINISH_TASK = "FINISH_TASK"
const MARK_ALL_AS_DONE = "MARK_ALL_AS_DONE"
const GET_ALL_DONE = "ALL_AS_DONE"
const UPDATE_TITLE = "UPDATE_TITLE"

const uuidv4 = require('uuid/v4');

export const newTask = (title) => {
    console.log(title)
    return {
        type: ADD_TASK,
        payload: {
            title,
            id: uuidv4(),
            done: false
        }
    }
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload: id
    }
}

export const finishTask = (id) =>{
    return {
        type: FINISH_TASK,
        payload: id
    }
}

export const markAllAsDone = () => {
    return {
        type: MARK_ALL_AS_DONE
    }
}

export const getDoneTasks = () => {
    return {
        type: GET_ALL_DONE
    }
}

export const updateTodoTitle = (title) => {
    return {
        type: UPDATE_TITLE,
        payload: title
    }
}