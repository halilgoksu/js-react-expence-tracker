export default (state,action)=>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return9
                ...state,
                transactions:state.transactions.filter(transaction=>transaction.id !== action.payload)
            }
    }
}