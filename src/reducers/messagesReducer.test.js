import { messagesReducer } from './messagesReducer';

describe('messagesReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = messagesReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state with message and user if the action is ADD_MESSAGE', () => {
    const initialState = [];
    const action = {
      type: 'ADD_MESSAGE',
      message: 'hi',
      isUser: true
    };
    const result = messagesReducer(initialState, action);
    const expectedState = [{ message: 'hi', isUser: true }];

    expect(result).toEqual(expectedState);
  });

  it('should return the correct state with messages cleared if the action is CLEAR_MESSAGES', () => {
    const initialState = [{ message: 'hi robbie, hi eric', isUser: true }];
    const action = {
      type: 'CLEAR_MESSAGES'
    };
    const result = messagesReducer(initialState, action);
    const expectedState = [];

    expect(result).toEqual(expectedState);
  });
});
