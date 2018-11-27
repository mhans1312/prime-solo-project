const cookieOrder = (state = [], action) => {
    // console.log('in cheeseOrder reducer', state);
    switch (action.type) {
        case 'SET_COOKIE':
            return action.payload;
        default:
            return state;
    }
}

export default cookieOrder;