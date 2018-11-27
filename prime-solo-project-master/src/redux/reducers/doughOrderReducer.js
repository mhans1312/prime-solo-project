const doughOrder = (state = [], action) => {
    // console.log('in doughOrder reducer', state);
    switch (action.type) {
        case 'SET_DOUGH':
            return action.payload;
        default:
            return state;
    }
}

export default doughOrder;