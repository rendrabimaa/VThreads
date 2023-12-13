import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import ModalAddData from '../ModalAddData';

function ButtonAddThread({ authUser }) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ModalAddData isOpen={isOpen} closeModal={closeModal} />
      <div className="flex w-11/12 sm:w-full mx-auto bg-red mt-4 p-1 border-2 border-gray-400 rounded-xl">
        <img src={authUser.avatar} alt="profile" className="w-8 rounded-full" />
        <button type="button" onClick={handleOpenModal} className="ml-2 pl-4 border-2 border-gray-400 w-full text-left rounded-xl text-gray-500 text-sm">
          {t('placeholderAddData')}
        </button>
      </div>
    </>
  );
}

ButtonAddThread.propTypes = {
  authUser: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};

export default ButtonAddThread;
