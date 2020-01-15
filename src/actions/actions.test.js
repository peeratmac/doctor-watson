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
});
