import React, { useState } from 'react'
import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native';

const initialHabit = { name: "", factor: "0" };

const HabitForm = ({ isVisible, setIsVisible, setHabitList }) => {
  const [habit, setHabit] = useState(initialHabit);

  const handleOnAddHabit = () => {
    setHabitList(prevState => [...prevState, habit]);
    setIsVisible(false);
    setHabit(initialHabit);
  }

  const handleFormUpdate = (enteredText, key) => {
    setHabit({ ...habit, [key]: enteredText });
  }

  const handleOnClose = () => {
    setIsVisible(false);
    setHabit(initialHabit);
  }

  return (
    <Modal testID='modal' visible={isVisible} animationType="slide">
      <View style={styles.formContainer}>
        <Text>
          Create a new Habit
        </Text>
        <View>
          <TextInput testID='name' value={habit.name} placeholder='Name' onChangeText={e => handleFormUpdate(e, "name")} />
        </View>
        <View>
          <TextInput testID='factor' value={habit.factor.toString()} keyboardType='numeric' placeholder='Factor' onChangeText={e => handleFormUpdate(e, "factor")} />
        </View>
        <View>
          <Button title='Create Habit' onPress={handleOnAddHabit} />
        </View>
      </View>
      <View>
        <Button testID='closeButton' title='Close' onPress={handleOnClose} />
      </View>
    </Modal>
  )
}

export default HabitForm;


const styles = StyleSheet.create({
  formContainer: {
    flex: 5,
    width: '100%',
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
