import React, { useState, useEffect } from 'react';
import {  StyleSheet } from 'react-native';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.clock}>{time}</h1>
      <p>Digital Clock</p>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clock: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default DigitalClock