import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Habit from './Habit';

const Habits = ({ habitList }) => {
  return (
    <View style={styles.habitsContainer}>
      {habitList.length < 1 ? (
        <Text>Please Add Your First Habit</Text>
      ) : (<FlatList data={habitList}
        renderItem={
          (itemData) => (
            <Habit name={itemData.item.name} />
          )}
      />
      )}
    </View>
  )
}

export default Habits;

const styles = StyleSheet.create({
  habitsContainer: {
    flex: 9,
    width: '100%',
    backgroundColor: '#888',
    alignItems: 'stretch',
    justifyContent: 'center',
    // flexDirection: 'row',
  },
});
