import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../../components/Loading';

function AppShell({ children }) {
  return (
    <>
      <Loading />
      <div className="mx-auto w-11/12 max-w-3xl">
        { children }
      </div>
    </>
  );
}

AppShell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

AppShell.defaultProps = {
  children: null,
};

export default AppShell;
