
function inputReducer(state = '' , action){
    switch(action.type){
        case 'inputChange' :
            return action.text
        default:
            return state
    }
}

export default inputReducer