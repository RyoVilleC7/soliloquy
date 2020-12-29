import { store } from '../store';

export const screenModeChange = () => {
    var mode = store.getState().screenMode;
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
    var mode = store.getState().spNav;
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