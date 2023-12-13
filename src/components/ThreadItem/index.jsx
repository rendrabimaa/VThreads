import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import CardNav from '../CardNav';

function ThreadItem({
  id, title, totalComments, createdAt, user,
}) {
  const navigate = useNavigate();

  const clickThreadHandle = () => {
    navigate(`/thread/${id}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      clickThreadHandle();
    }
  };

  return (
    <div onClick={clickThreadHandle} onKeyDown={handleKeyPress} role="button" tabIndex={0} className="my-2 border-2 border-gray-400 py-4 px-2 cursor-pointer">
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

ThreadItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,

};

export default ThreadItem;
