const comm = (state = [], action) => {
    // console.log('in products reducer', state);
    switch (action.type) {
        case 'SET_COMM':
            return action.payload;
        default:
            return state; 
    }
}

export default (comm)