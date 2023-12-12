import React from 'react';
import PropTypes from 'prop-types';
import { TbNeedleThread } from 'react-icons/tb';
import Loading from '../../components/Loading';

function AuthLayout({ children }) {
  return (
    <>
      <Loading />
      <div className="pt-10 h-screen w-full bg-slate-400">
        <h3 className="text-white flex justify-center items-center gap-2 text-2xl font-bold">
          <TbNeedleThread />
          {' '}
          VThreads
        </h3>
        <div className="border-4 border-slate-600 mt-4 sm:mt-8 px-4 py-4 mx-2 sm:mx-auto max-w-lg rounded-lg bg-white">
          { children }
        </div>
      </div>
    </>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

AuthLayout.defaultProps = {
  children: null,
};

export default AuthLayout;
