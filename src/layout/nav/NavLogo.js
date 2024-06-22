import React from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_PATHS } from 'config.js';

const NavLogo = () => {
  return (
    <div className="logo position-relative">
      <Link to={DEFAULT_PATHS.APP}>
        <img width={222} height={99} src="/img/logo/UNO-logo.png" alt="logo" />
      </Link>
    </div>
  );
};
export default React.memo(NavLogo);
