import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Habits = () => {
  return (
    <View style={styles.habitsContainer}>
      <Text >
        Habits
      </Text>
    </View>
  )
}

export default Habits;

const styles = StyleSheet.create({
  habitsContainer: {
    flex: 9,
    width: '100%',
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // flexDirection: 'row',
  },
});
