import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdLogout } from 'react-icons/md';
import { TbNeedleThread } from 'react-icons/tb';
import ButtonAddThread from '../../components/ButtonAddThread';
import { asyncUnsetAuthUser } from '../../store/authUser/actions';
import Loading from '../../components/Loading';
import { toggleLanguage } from '../../store/language/action';
import i18n from '../../i18n';

function Navbar() {
  const authUser = useSelector((states) => states.authUser);
  const language = useSelector((state) => state.translation.language);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(asyncUnsetAuthUser());
  };

  const toggleLg = async () => {
    await dispatch(toggleLanguage());
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Loading />
      <nav className="fixed w-full sm:w-11/12 max-w-3xl mx-auto bg-white pb-2 border-b-4 border-gray-500">
        <div className="flex w-full justify-between bg-gray-300 py-4 px-4">
          <h3 className="flex gap-2 items-center text-xl font-bold text-gray-800">
            <TbNeedleThread />
            {' '}
            VThreads
          </h3>
          <div className="flex justify-between gap-2 items-center">
            <button type="button" onClick={toggleLg} className="bg-slate-600 py-2 px-4 rounded-lg text-white font-semibold">{language}</button>
            <button type="button" onClick={handleLogout} className="flex gap-2 items-center bg-red-500 rounded-md py-1 px-4 text-white font-semibold text-xl ">
              {authUser.name}
              <MdLogout />
            </button>
          </div>
        </div>
        <ButtonAddThread authUser={authUser} />
      </nav>
    </>
  );
}

export default Navbar;
