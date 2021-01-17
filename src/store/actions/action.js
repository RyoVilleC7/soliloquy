import { store } from '../store';

export const screenModeChange = () => {
    const mode = store.getState().screenMode;
    return (
        mode ? {
            type: 'SCREENMODE_CAHNGE_DARK',
            value: false
        } : {
            type: 'SCREENMODE_CAHNGE_LIGHT',
            value: true
        }
    );
}

export const spNavChange = () => {
    const mode = store.getState().spNav;
    return (
        mode ? {
            type: 'SP_NAV_CLOSE',
            value: false
        } : {
            type: 'SP_NAV_OPEN',
            value: true
        }
    );
}

export const sortBtn_cat_Change = () => {
    const mode = store.getState().sortBtn_cat;
    return (
        mode ? {
            type: 'SORTBTN_CAT_CLOSE',
            value: false
        } : {
            type: 'SORTBTN_CAT_OPEN',
            value: true
        }
    );
}

export const sortBtn_falseOnly_Change = () => {
    return (
        {
            type: 'SORTBTN_CAT_CLOSE',
            value: false
        }
    );
}