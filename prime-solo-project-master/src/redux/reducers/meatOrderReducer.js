const meatOrder = (state = [], action) => {
    console.log('in meatOrder reducer', state);
    switch (action.type) {
        case 'SET_MEAT':
            return action.payload;
        default:
            return state;
    }
}

export default meatOrder;