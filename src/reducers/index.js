const initialState = {
    menu : [
        {
            id: 1, 
            title: 'Chardone',
            text: 'There will be characteristics', 
            src: 'holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail'
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'MEN_LOADED':
            return {
                menu: action.payload
            }
        default:
            return state;
    }
        
};

export default reducer;