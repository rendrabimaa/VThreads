import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREADS: 'RECEIVE_THREADS',
  ADD_THREAD: 'ADD_THREAD',
};

const receiveThreadsActionCreator = (threads) => ({
  type: ActionType.RECEIVE_THREADS,
  payload: {
    threads,
  },
});

const addThreadActionCreator = (thread) => ({
  type: ActionType.ADD_THREAD,
  payload: {
    thread,
  },
});

const asyncAddThread = ({ title, body }) => async (dispatch) => {
  try {
    const thread = await api.createThread({ title, body });
    dispatch(addThreadActionCreator(thread));
  } catch (error) {
    alert(error.message);
  }
};

export {
  ActionType,
  receiveThreadsActionCreator,
  addThreadActionCreator,
  asyncAddThread,
};
