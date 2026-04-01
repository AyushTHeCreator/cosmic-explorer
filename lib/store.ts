import { createStore } from 'redux';
import { AppState } from '../types/store';
const initialState: AppState = { celestialBodies: [] };
const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
};
export const store = createStore(reducer);