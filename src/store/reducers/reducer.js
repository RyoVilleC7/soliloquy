export const initialState = {
    screenMode: true,
    spNav: false
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
        
        case 'SP_NAV_OPEN':
            return {
                ...state,
                spNav: true
            }

        case 'SP_NAV_CLOSE':
            return {
                ...state,
                spNav: false
            }
    
        default:
            return state;
    }
}