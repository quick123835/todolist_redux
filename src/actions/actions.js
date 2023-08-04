export const inputChange = (value) => {
    return{
        type: 'inputChange',
        text: value
    }
}

export const dateChange = (value) => {
    return{
        type: 'dateChange' ,
        date: value
    }
}

export const addTodo = (inputValue,dateValue) => {
    return{
        type: 'addTodo', 
        payload: {
            id: Math.floor(Math.random()*100),
            text: inputValue,
            checked:false,
            delete:false,
            date:dateValue
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