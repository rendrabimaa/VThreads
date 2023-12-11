import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardNav from '../CardNav';

function ThreadItem({
  id, title, totalComments, createdAt, user,
}) {
  const navigate = useNavigate();

  const clickThreadHandle = () => {
    navigate(`/thread/${id}`);
  };

  return (
    <div onClick={clickThreadHandle} className="my-2 border-2 border-gray-400 py-4 px-2 cursor-pointer">
      <CardNav avatar={user.avatar} owner={user.name} createdAt={createdAt} />
      <p className="text-lg mt-2 mb-4 font-semibold text-gray-700">
        {title}
      </p>
      <hr />
      <div className="flex justify-center mt-2 text-sm">
        {totalComments}
      </div>
    </div>
  );
}

export default ThreadItem;
