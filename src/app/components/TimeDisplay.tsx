"use client";

import { useEffect, useState } from 'react';

const TimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date: Date) => {
    const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const [time, period] = timeString.split(' ');
    const [hour, minute, second] = time.split(':');
    return { hour, minute, second, period };
  };

  const formatDay = (date: Date) => {
    const dateString = date.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const [weekday, monthDay, year] = dateString.split(', ');
    return { weekday, monthDay, year };
  };

  if (!mounted) {
    return null; // Render nothing on the server
  }

  const { hour, minute, second, period } = formatTime(currentTime);
  const { weekday, monthDay, year } = formatDay(currentTime);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold">
        <span >{hour}</span>:<span >{minute}</span> <span style={{ color: '#1E40AF' }}>{period}</span>
      </div>
      <div className="text-xl">
        <span style={{ color: '#1E4' }}>{weekday}</span>, <span style={{ color: 'Orange' }}>{monthDay}</span>, <span>{year}</span>
      </div>
    </div>
  );
};

export default TimeDisplay;