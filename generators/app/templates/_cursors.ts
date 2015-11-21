import { IState, ICursor } from '../node_modules/bobflux/dist/index';
import { IAppState } from './state'

//This is global cursor for global state
export let appCursor: ICursor<IAppState> = {
    key: ''
};