import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUsersReducer from './authUser/reducers';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';
import threadDetailReducer from './threadDetail/reducer';
import translationReducer from './language/reducer';

const store = configureStore({
  reducer: {
    authUser: authUsersReducer,
    threads: threadsReducer,
    users: usersReducer,
    threadDetail: threadDetailReducer,
    loadingBar: loadingBarReducer,
    translation: translationReducer,
  },
});

export default store;
