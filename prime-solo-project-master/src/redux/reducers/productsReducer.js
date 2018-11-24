
const products = (state = [], action) => {
    console.log('in products reducer', state);
    switch (action.type) {
        case 'SET_PRODUCTS':
            return action.payload;
        default:
            return state; 
    }
}

export default products;