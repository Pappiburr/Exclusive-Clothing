import { Middleware, MiddlewareAPI, UnknownAction } from 'redux';

import { RootState } from '../store';

export const loggerMiddleware: Middleware<{}, RootState> = (api: MiddlewareAPI<any, RootState>) => (next) => (action: unknown) => {
    if (typeof action === 'object' && action !== null && 'type' in action) {
        const typedAction = action as UnknownAction;
        console.log('type', typedAction.type);
        console.log('payload', typedAction.payload);
        console.log('currentState', api.getState());
        const result = next(typedAction);
        console.log('next state:', api.getState());
        return result;
    }
    return next(action);
};
