export const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [...state, { message: action.message, user: action.isUser }];
    case 'CLEAR_MESSAGES':
      return [];
    default:
      return state;
  }
};
