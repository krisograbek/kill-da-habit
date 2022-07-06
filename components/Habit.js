import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Habit = ({ name }) => {
  return (
    <View testID='habitView' style={styles.habitContainer}>
      <Text testID="text" style={styles.text}>
        {name}
      </Text>
    </View>
  )
}

export default Habit;

const styles = StyleSheet.create({
  habitContainer: {
    flex: 1,
    justifyContent: 'center',
    height: 40,
    borderRadius: 4,
    marginTop: 4,
    marginHorizontal: 6,
    paddingLeft: 4,
    backgroundColor: '#ddd'
  },
  text: {
    fontSize: 16,
  }
})
