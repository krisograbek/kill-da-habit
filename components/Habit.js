import React from 'react'
import { Text, View } from 'react-native';

const Habit = ({ name }) => {
  return (
    <View testID='habitView'>
      <Text testID="text">
        {name}
      </Text>
    </View>
  )
}

export default Habit;