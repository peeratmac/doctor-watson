import * as actions from './index.js';

describe('actions', () => {
  it('should have a type of CREATE_USER', () => {
    const user = {
      id: 2341235125,
      firstName: 'eric',
      lastName: 'robbie',
      feeling: 'cool'
    };

    const expectedAction = {
      type: 'CREATE_USER',
      user: user
    };

    const result = actions.createUser(user);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of REMOVE_USER', () => {
    const expectedAction = {
      type: 'REMOVE_USER'
    };

    expect(actions.removeUser()).toEqual(expectedAction);
  });

  it('should have a type of HAS_ERRORED', () => {
    const mockErrorMessage = 'NOPE';
    const expectedAction = {
      type: 'HAS_ERRORED',
      errorMsg: mockErrorMessage
    };

    expect(actions.hasErrored(mockErrorMessage)).toEqual(expectedAction);
  });

  it('should have a type of ADD_MESSAGE', () => {
    const message = 'YES, ALMOST THERE, KEEP GOING.';

    const expectedAction = {
      type: 'ADD_MESSAGE',
      message: message,
      isUser: true
    };

    expect(actions.addMessage(message, true)).toEqual(expectedAction);
  });
});
