import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const CountdownTimer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now: any = new Date();
      const targetDate: any = new Date('2023-09-22T4:00:00');
      const timeRemaining = targetDate - now;

      const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60),
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      if (timeRemaining <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/flash-sale.jpeg')}
        style={styles.titleImage}
      />
      <View style={styles.countWrapper}>
        <Text style={styles.timeText}>{hours.toString().padStart(2, '0')}</Text>
        <Text style={styles.colon}>:</Text>
        <Text style={styles.timeText}>
          {minutes.toString().padStart(2, '0')}
        </Text>
        <Text style={styles.colon}>:</Text>
        <Text style={styles.timeText}>
          {seconds.toString().padStart(2, '0')}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  titleImage: {
    height: 24,
    width: 100,
    objectFit: 'contain',
  },
  countWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  timeText: {
    color: 'white',
    padding: 6,
    backgroundColor: 'black',
    fontWeight: '700',
  },
  colon: {
    fontWeight: '900',
  },
});

export default CountdownTimer;
