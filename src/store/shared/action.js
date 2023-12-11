import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/actions';

const asyncPopulateThreads = () => async (dispatch) => {
  try {
    const threads = await api.getAllThreads();
    const users = await api.getAllUsers();

    dispatch(receiveUsersActionCreator(users));
    dispatch(receiveThreadsActionCreator(threads));
  } catch (error) {
    alert(error.message);
  }
};

export { asyncPopulateThreads };
