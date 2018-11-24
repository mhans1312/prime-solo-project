const mixOrder = (state = [], action) => {
    console.log('in cheeseOrder reducer', state);
    switch (action.type) {
        case 'SET_MIX':
            return action.payload;
        default:
            return state;
    }
}

export default mixOrder;