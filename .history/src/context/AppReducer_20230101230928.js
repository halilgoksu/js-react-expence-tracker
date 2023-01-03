export default (state,action)=>{

    switch(action.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions:state,transactions.fi
            }
        default:
            return state;
    }
}