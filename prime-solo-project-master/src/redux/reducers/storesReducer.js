const stores = (state = [], action) => {
    console.log('in stores reducer', state);
    switch (action.type) {
        case 'SET_STORES':
            return action.payload;
        default:
            return state;
    }
}

export default stores;