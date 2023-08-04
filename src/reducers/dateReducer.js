function dateReducer(state='',action){
    switch(action.type){
        case 'dateChange':
            return action.date
        default:
            return state
    }
}

export default dateReducer