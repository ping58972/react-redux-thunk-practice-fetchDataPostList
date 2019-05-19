export default (state= [], action) => {
    switch (action.type) {
        case 'FETCH_POST':
            return action.payload;
        case 'SELECT_POST':
            return action.payload;

        default: return state;
    }
};