export const initialState = {
    screenMode: true,
    spNav: false,
    sortBtn_cat: false
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
        
            case 'SORTBTN_CAT_OPEN':
                return {
                    ...state,
                    sortBtn_cat: true
                }
    
            case 'SORTBTN_CAT_CLOSE':
                return {
                    ...state,
                    sortBtn_cat: false
                }
    
        default:
            return state;
    }
}