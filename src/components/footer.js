import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>基于 <Link to="https://uptimerobot.com/" text="UptimeRobot"/> 接口</p>
        <p>Powered by <Link to="https://github.com/yb/uptime-status" text="Uptime Status"/></p>
      </div>
    </div>
  );
}

export default Footer;
