const ADD_TASK =  "ADD_TASK"
const DELETE_TASK = "DELETE_TASK"
const FINISH_TASK = "FINISH_TASK"
const MARK_ALL_AS_DONE = "MARK_ALL_AS_DONE"
const UPDATE_TITLE = "UPDATE_TITLE"

const newTask = (state = null, action) => (action.type === ADD_TASK) ? action.payload : state

const INITIAL_STATE = {
    newTodoTitle: "",
    tasks: [
        {
            "id": "1",
            "title": "take the trash out",
            "done": false
        },
        {
            "id": "2",
            "title": "buy bread",
            "done": false
        },
        {
            "id": "3",
            "title": "call Dad",
            "done": true
        },
        {
            "id": "4",
            "title": "buy ps4",
            "done": true
        }
    ]
}

export const tasks = (state = INITIAL_STATE.tasks, action) => {
    switch(action.type) {
        case ADD_TASK :

            const hasTask = state.some( task => task.title === action.payload.title)

            return (hasTask) ?
            state :
            [
                ...state,
                newTask(null, action)
            ]

        case DELETE_TASK :
            return state.filter(task => task.id !== action.payload)
        
        case FINISH_TASK :
            return state.map((task) => 
                (task.id === action.payload) ?
                 {...task, done: true}
                : task
            )

        case MARK_ALL_AS_DONE :
            return state.map((task) => ({...task, done: true}) )
        
        default: 
            return state
    }
}


export const todoTitle = (state = INITIAL_STATE.newTodoTitle, action) => {
    switch(action.type) {

        case UPDATE_TITLE :
            return action.payload
        default : 
            return state
    }
}