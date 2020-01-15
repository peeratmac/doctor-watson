import { messagesReducer } from './messagesReducer';

describe('messagesReducer', () => {
  it('should return the initial state', () => {
    const expected = [];
    const result = messagesReducer(undefined, {});

    expect(result).toEqual(expected);
  });
});
