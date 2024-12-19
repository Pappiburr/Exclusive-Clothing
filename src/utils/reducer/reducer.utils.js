// Utility to create a Redux action
export const createAction = (type, payload) => ({ type, payload });
  
  // Example of a utility to handle common action patterns (request, success, failure)
  export const createAsyncAction = (type) => ({
    request: `${type}_REQUEST`,
    success: `${type}_SUCCESS`,
    failure: `${type}_FAILURE`,
  });
  
  // A utility to handle actions that reset state
  export const createResetAction = (type) => ({
    type: `${type}_RESET`,
  });