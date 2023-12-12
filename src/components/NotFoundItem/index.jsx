import React from 'react';
import PropTypes from 'prop-types';
import { ImCross } from 'react-icons/im';

function NotFoundItem({ children }) {
  return (
    <p className="flex gap-2 text-red-500 items-center text-2xl font-bold justify-center w-full">
      <ImCross />
      {children}
      {' '}
      Not Found
    </p>
  );
}

NotFoundItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

NotFoundItem.defaultProps = {
  children: null,
};

export default NotFoundItem;
