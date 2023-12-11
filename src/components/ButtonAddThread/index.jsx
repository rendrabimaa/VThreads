import React, { useState } from 'react';
import ModalAddData from '../ModalAddData';

function ButtonAddThread({ authUser }) {
  const [isOpen, setIsOpen] = useState(false);

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
        <button onClick={handleOpenModal} className="ml-2 pl-4 border-2 border-gray-400 w-full text-left rounded-xl text-gray-500 text-sm">
          Click here to Post Something
        </button>
      </div>
    </>
  );
}

export default ButtonAddThread;
