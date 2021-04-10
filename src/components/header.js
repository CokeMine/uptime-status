import React from 'react';
import Link from './link';

const Header = () => {
  const {SiteName, Navi} = window.Config;
  return (
    <div id="header">
      <div className="container">
        <span className="logo">{SiteName}</span>
        <div className="navi">
          {Navi.map((item, index) => (
            <Link key={index} text={item.text} to={item.url} style={{fontSize: '16px'}}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
