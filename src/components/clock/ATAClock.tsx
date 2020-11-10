import React, { useState, useEffect } from 'react';
import 'react-clock/dist/Clock.css';
import Clock from 'react-clock';

const ATAClock: React.FC = () => {
  const [value, setValue] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <Clock renderNumbers={true} value={value} />;
};

export default ATAClock;
