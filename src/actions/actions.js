export const inputChange = (value) => {
    return{
        type: 'inputChange',
        text: value
    }
}

export const addTodo = (value) => {
    return{
        type: 'addTodo', 
        payload: {
            id: Math.floor(Math.random()*100),
            text: value,
            checked:false,
            delete:false
        }
    }
}

export const checkTodo = (id) => {
    return{
        type: 'checkTodo',
        payload: id
    }
}

export const delTodo = (id) => {
    return {
        type: 'delTodo',
        payload: id
    }
}