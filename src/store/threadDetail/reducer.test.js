/**
* test scenario for threadsReducer
*
* - talkReducers function
*  - should return the initial state when given by unknown action
*  - should return the thread detail when given by RECEIVE_THREAD_DETAIL action
*  - should return null when given by CLEAR_THREAD_DETAIL action
*
*
*/

import { describe, expect, it } from 'vitest';
import threadDetailReducer from './reducer';

describe('threadDetailReducer function', () => {
  it('should return initial state when given by unknow action', () => {
    // arrange
    const initialState = null;
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // asert
    expect(nextState).toEqual(initialState);
  });

  it('should return the thread detail when given by RECEIVE_THREAD_DETAIL action', () => {
    // arange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        detailThread: {
          id: 'thread-1',
          title: 'Thread Pertama',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
          comments: [],
        },
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return null when given by CLEAR_THREAD_DETAIL action', () => {
    // arrange
    const initialState = null;
    const action = { type: 'CLEAR_THREAD_DETAIL' };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // asert
    expect(nextState).toEqual(initialState);
  });
});
