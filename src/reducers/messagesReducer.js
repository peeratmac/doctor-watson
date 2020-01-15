export const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [...state, { messages: action.messages, user: action.isUser }];
    default:
      return state;
  }
};
