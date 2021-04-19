import React, {useEffect, useState} from 'react';
import UptimeItem from './uptime-item';
import {GetMonitors} from '../utils/uptimerobot';

const Uptime = (props) => {

  let {CountDays} = window.Config;
  CountDays = CountDays();
  const {apikey} = props;
  const [monitors, setMonitors] = useState(null);
  useEffect(() => {
    GetMonitors(apikey, CountDays).then(setMonitors);
  }, [apikey, CountDays]);

  return monitors ? monitors.map(item => (
    <UptimeItem key={item.id} monitor={item}/>
  )) : <div className="item loading"/>;
}

export default Uptime;
