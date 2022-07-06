import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Habit from './Habit';

const Habits = ({ habitList }) => {
  return (
    <View style={styles.habitsContainer}>
      {habitList.length < 1 ? (
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Press the "+" On Top Left To Add Your First Habit
          </Text>
        </View>
      ) : (<FlatList data={habitList}
        renderItem={
          (itemData) => (
            <Habit name={itemData.item.name} />
          )}
      />
      )
      }
    </View >
  )
}

export default Habits;

const styles = StyleSheet.create({
  habitsContainer: {
    flex: 9,
    width: '100%',
    backgroundColor: '#aaa',
    alignItems: 'stretch',
  },
  textContainer: {
    alignSelf: 'center',
  },
  text: {
    marginTop: 12,
    marginHorizontal: 16,
    fontSize: 24
  }
});
