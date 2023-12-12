import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { asyncReceiveThreadDetail } from '../../store/threadDetail/action';
import CommentItem from '../../components/CommentItem';
import { decodeText } from '../../utils/decodeText';
import CardNav from '../../components/CardNav';
import ModalAddData from '../../components/ModalAddData';
import AppShell from '../../layouts/AppShell';
import NotFoundItem from '../../components/NotFoundItem';

function DetailThread() {
  const { id } = useParams();
  const threadDetail = useSelector((states) => states.threadDetail);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  return (
    threadDetail && (
    <AppShell>
      <ModalAddData isOpen={isOpen} closeModal={closeModal} addComment threadId={id} />
      <div className="w-full flex justify-end mt-5 border-b-4 border-gray-600 pb-2">
        <Link to="/" type="button" className="flex gap-2 items-center py-2 px-4 bg-red-500 text-white font-bold rounded-lg">
          <IoMdArrowRoundBack />
          {' '}
          Back
        </Link>
      </div>
      <div className="px-2 mx-auto mt-5">
        <div key={threadDetail.id}>
          <CardNav avatar={threadDetail.owner.avatar} owner={threadDetail.owner.name} createdAt={threadDetail.createdAt} />
          <div className="font-semibold text-md mt-4">
            {decodeText(threadDetail.title)}
          </div>
          <div className="text-sm my-2">
            {decodeText(threadDetail.body)}
          </div>
        </div>
        <div className="flex items-center justify-between mt-10 border-top-2 border-gray-500">
          <h3 className="font-bold text-lg">
            Comments
          </h3>
          <button type="button" onClick={handleOpenModal} className="p-0 m-0 underline font-bold text-blue-600 text-sm">
            Add Comment
          </button>
        </div>
        <div className="mt-2 pt-4 border-t-2">
          {threadDetail.comments.length > 0 ? threadDetail.comments.map((comment) => (
            <CommentItem key={comment.id} data={comment} />
          ))
            : (
              <NotFoundItem>
                Comment
              </NotFoundItem>
            )}
        </div>
      </div>
    </AppShell>
    )
  );
}

export default DetailThread;
