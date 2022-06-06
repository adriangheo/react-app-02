const initialState = {
    // loading: false, //hypotatical initial case
    // color: 'blue',  //hypotatical initial case
    products: []
}

function cartReducer(state=initialState, action){
    switch(action.type) {
        case 'ADD_TO_CART':
            const newState = {
                ...state, //add contents from old state
                products: [
                    ...state.products,
                    action.payload.product
                ]
            };
            return newState;
        case 'REMOVE_FROM_CART':
            const newStateAftrRmv = {};
            return newState;
        default:
            return state;
      }
}

export default cartReducer;