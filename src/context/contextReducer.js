// reducer -> Takes an old state and an action, and returns a new state

const transactions = [
    {
        id: 1,

    }
]
const contextReducer = (state, action) => {
    let transactions
    switch(action.type) {
        
        case 'DELETE_TRANSACTION': 
            transactions = state.filter((t) => t.id !== action.payload)
            return transactions
            
        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state]
            return transactions
            
        default:
            return state
            break
    }

}

export default contextReducer