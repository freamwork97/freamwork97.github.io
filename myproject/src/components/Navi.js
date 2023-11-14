import React from 'react';

const Navigation = () => {
  return (
    <nav className="nav navbar-dark bg-secondary p-2">
      <li className="nav-item mr-2"><a className="nav-link text-light" href="/">홈</a></li>
      <li className="nav-item mr-2"><a className="nav-link text-light" href="/it">IT</a></li>
      <li className="nav-item mr-2"><a className="nav-link text-light" href="/economy">경제</a></li>
    </nav>
  );
}

export default Navigation;
