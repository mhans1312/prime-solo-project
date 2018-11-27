const pars = (state = [], action) => {
    // console.log('in pars reducer', state);
    switch (action.type) {
        case 'SET_PARS':
            return action.payload;
        // case 'EDIT_PARS':
        //     return state.map(())
        default:
            return state; 
    }
}

export default pars;