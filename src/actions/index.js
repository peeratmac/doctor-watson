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

export const showMessage = message => ({
  type: 'SHOW_MESSAGE',
  message: message
});
