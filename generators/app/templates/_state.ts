import { IState, ICursor } from '../node_modules/bobflux/dist/index';

//here add base state and all sub-states required in your application
export interface IAppState extends IState {    
}

export let createDefaultAppState = (): IAppState => {
    return {
    };
};