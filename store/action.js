import { Store } from './store';

export const screenModeChange = ()=>{
    var mode = Store.getState().screenMode;
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