import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
};

const receiveThreadDetailActionCreator = (threadDetail) => ({
  type: ActionType.RECEIVE_THREAD_DETAIL,
  payload: {
    threadDetail,
  },
});

const clearThreadDetailActionCreator = () => ({
  type: ActionType.CLEAR_THREAD_DETAIL,
});

const asyncReceiveThreadDetail = (threadId) => async (dispatch) => {
  dispatch(clearThreadDetailActionCreator());

  try {
    const threadDetail = await api.getThreadDetail(threadId);
    dispatch(receiveThreadDetailActionCreator(threadDetail));
  } catch (error) {
    alert(error.message);
  }
};

const asyncAddComment = (content, threadId) => async () => {
  try {
    await api.createComment(content, threadId);
  } catch (error) {
    alert(error.message);
  }
};

export {
  ActionType,
  receiveThreadDetailActionCreator,
  asyncReceiveThreadDetail,
  asyncAddComment,
};
