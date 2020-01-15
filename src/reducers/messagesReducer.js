export const messagesReducer = (state = '', action) => {
  switch (action.type) {
    case 'SHOW_MESSAGE':
      return action.message;
    default:
      return state;
  }
};
