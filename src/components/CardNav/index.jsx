import React from 'react';
import postedAt from '../../utils/calculatePostedAt';

function CardNav({ avatar, owner, createdAt }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img src={avatar} alt="owner profile" className="w-8 rounded-full" />
        <p className="ml-2 font-semibold text-sm">
          {owner}
        </p>
      </div>
      <p className="text-xs">
        { postedAt(createdAt) }
      </p>
    </div>
  );
}

export default CardNav;
