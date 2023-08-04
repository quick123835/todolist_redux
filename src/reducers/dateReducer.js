function dateReducer(state=null,action){
    const day = new Date()
    const today = `${day.getFullYear()}-${day.getMonth()+1}-${day.getDate()}`
    switch(action.type){
        case 'dateChange':
            return action.date
        default:
            return today
    }
}

export default dateReducer