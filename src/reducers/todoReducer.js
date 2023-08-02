const initialState = [{
    id:null,
    text:'',
    checked:false,
    delete:false
}]

function todoReducer(state =[] , action){
    switch(action.type){
        case 'addTodo' :
            return [...state, action.payload]
        case 'checkTodo' :
            return state.map((s) => {
                if(s.id === action.payload){
                    return {
                        ...s,
                        checked: !s.checked
                    }
                }else{
                    return s
                }
            })
        case 'delTodo':
            const filterState = state.filter((s) => s.id !== action.payload)
            return filterState
        default:
            return state
    }
}

export default todoReducer