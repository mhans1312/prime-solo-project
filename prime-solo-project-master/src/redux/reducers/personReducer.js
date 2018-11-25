const person = (state = [], action) => {
    console.log('in person reducer', state);
    switch (action.type) {
        case 'SET_PERSON':
            return action.payload;
        default:
            return state; 
    }
}

export default person;