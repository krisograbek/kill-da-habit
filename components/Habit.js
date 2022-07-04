import React from 'react'
import { Text, View } from 'react-native';

const Habit = ({ name }) => {
  return (
    <View>
      <Text>
        {name}
      </Text>
    </View>
  )
}

export default Habit;