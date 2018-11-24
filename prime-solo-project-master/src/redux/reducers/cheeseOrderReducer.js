const cheeseOrder = (state = [], action) => {
    console.log('in cheeseOrder reducer', state);
    switch (action.type) {
        case 'SET_CHEESE':
            return action.payload;
        default:
            return state;
    }
}

export default cheeseOrder;