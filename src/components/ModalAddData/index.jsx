import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import useInput from '../../hooks/useInput';
import { asyncAddThread } from '../../store/threads/action';
import { asyncPopulateThreads } from '../../store/shared/action';
import { asyncAddComment, asyncReceiveThreadDetail } from '../../store/threadDetail/action';

function ModalAddData({
  isOpen, closeModal, addComment, threadId,
}) {
  const [title, titleChange, setTitle] = useInput();
  const [body, bodyChange, setBody] = useInput();
  const dispatch = useDispatch();

  const handleAddThread = async () => {
    await dispatch(asyncAddThread({ title, body }));
    await dispatch(asyncPopulateThreads());
    closeModal();
    setTitle('');
    setBody('');
  };

  const handleAddComment = async () => {
    await dispatch(asyncAddComment(body, threadId));
    await dispatch(asyncReceiveThreadDetail(threadId));
    closeModal();
    setTitle('');
    setBody('');
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Tambah Data Modal"
      className="modal fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75"
      overlayClassName="modal-overlay"
    >
      <div className="bg-white p-8 rounded-lg w-96">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-4">Post Something</h2>
          <button type="button" className="bg-red-500 p-2" onClick={closeModal}>X</button>
        </div>
        {!addComment
          && (
          <input
            type="text"
            name="name"
            value={title}
            onChange={titleChange}
            placeholder="Write title that you want to post"
            className="border border-gray-300 rounded px-3 py-2 mb-3 w-full"
          />
          )}
        <textarea
          name="body"
          value={body}
          onChange={bodyChange}
          placeholder="Write something that you want to post"
          className="border border-gray-300 rounded px-3 py-2 mb-3 w-full"
          cols="30"
          rows="10"
        />
        <button
          type="button"
          onClick={addComment ? handleAddComment : handleAddThread}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Post
        </button>
      </div>
    </Modal>
  );
}

ModalAddData.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  threadId: PropTypes.string.isRequired,
  addComment: PropTypes.bool,
};

ModalAddData.defaultProps = {
  addComment: null,
};

export default ModalAddData;
