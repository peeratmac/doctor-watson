export const createUser = user => ({
  type: 'CREATE_USER',
  user: user
});

export const removeUser = () => ({
  type: 'REMOVE_USER'
});

export const hasErrored = errorMsg => ({
  type: 'HAS_ERRORED',
  errorMsg: errorMsg
});

export const addMessage = (message, isUser) => ({
  type: 'ADD_MESSAGE',
  message: message,
  isUser: isUser
});

export const clearMessages = () => ({
  type: 'CLEAR_MESSAGES'
});
