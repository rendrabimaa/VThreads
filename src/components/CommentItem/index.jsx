import React from 'react';
import PropTypes from 'prop-types';
import CardNav from '../CardNav';
import { decodeText } from '../../utils/decodeText';

function CommentItem({ data }) {
  return (
    <div className="w-full my-2 border-b-2">
      <CardNav avatar={data.owner.avatar} owner={data.owner.name} createdAt={data.createdAt} />
      <div className="py-2 text-sm w-full">
        {decodeText(data.content)}
      </div>
    </div>
  );
}

CommentItem.propTypes = {
  data: PropTypes.shape({
    owner: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default CommentItem;
