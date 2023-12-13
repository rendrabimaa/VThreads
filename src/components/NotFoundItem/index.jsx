import React from 'react';
import PropTypes from 'prop-types';
import { ImCross } from 'react-icons/im';
import { useTranslation } from 'react-i18next';

function NotFoundItem({ children }) {
  const { t } = useTranslation();

  return (
    <p className="flex gap-2 text-red-500 items-center text-2xl font-bold justify-center w-full">
      <ImCross />
      {children}
      {' '}
      {t('notFoundText')}
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
