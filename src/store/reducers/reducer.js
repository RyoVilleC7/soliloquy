export const initialState = {
    screenMode: false
}

export const reducer = function(state = initialState, action){
    switch (action.type) {
        case 'SCREENMODE_CAHNGE_LIGHT':
            return {
                ...state,
                screenMode: true
            }

            case 'SCREENMODE_CAHNGE_DARK':
                return {
                    ...state,
                    screenMode: false
                }
    
        default:
            return state;
    }
}