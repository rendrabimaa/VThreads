import { configureStore } from '@reduxjs/toolkit';
import authUsersReducer from './authUser/reducers';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';
import threadDetailReducer from './threadDetail/reducer';

const store = configureStore({
  reducer: {
    authUser: authUsersReducer,
    threads: threadsReducer,
    users: usersReducer,
    threadDetail: threadDetailReducer,
  },
});

export default store;
