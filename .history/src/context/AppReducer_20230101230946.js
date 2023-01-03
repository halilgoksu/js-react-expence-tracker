export default (state,action)=>{

    switch(action.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions:state,transactions.filter(transaction=>transaction.id !=)
            }
        default:
            return state;
    }
}