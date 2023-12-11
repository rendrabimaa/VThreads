import React, { useEffect } from 'react';
import CardNav from '../CardNav';
import { decodeText } from '../../utils/decodeText';

function CommentItem({ data }) {
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <div className="w-full my-2 border-b-2">
      <CardNav avatar={data.owner.avatar} owner={data.owner.name} createdAt={data.createdAt} />
      <div className="py-2 text-sm w-full">
        {decodeText(data.content)}
      </div>
    </div>
  );
}

export default CommentItem;
