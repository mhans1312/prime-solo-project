const role = (state = [], action) => {
    // console.log('in role reducer', state);
    switch (action.type) {
        case 'SET_ROLE':
            return action.payload;
        default:
            return state; 
    }
}

export default role;