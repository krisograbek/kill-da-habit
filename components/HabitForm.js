import React, { useState } from 'react'
import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import { theme } from '../global.styles';

const initialHabit = { name: "", factor: "" };

const HabitForm = ({ isVisible, setIsVisible, setHabitList }) => {
  const [habit, setHabit] = useState(initialHabit);

  const handleOnAddHabit = () => {
    setHabitList(prevState => [...prevState, habit]);
    setIsVisible(false);
    // setHabit(initialHabit);
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
        <Text style={{ fontSize: 20, marginVertical: 16, textAlign: 'center' }}>
          Add the habit you want to break
        </Text>
        <View style={styles.nameStyle}>
          <TextInput testID='name' value={habit.name} placeholder='Name' onChangeText={e => handleFormUpdate(e, "name")} />
        </View>
        <View style={styles.factorStyle}>
          <TextInput testID='factor' value={habit.factor.toString()} keyboardType='number-pad' placeholder='Factor' onChangeText={e => handleFormUpdate(e, "factor")} />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button testID='closeButton' title='Cancel' onPress={handleOnClose} color={theme.colors.secondary} />
          </View>
          <View style={styles.button}>
            <Button title='Create Habit' onPress={handleOnAddHabit} color={theme.colors.primary} />
          </View>
        </View>
      </View>
      {/* <View>
        <Button testID='closeButton' title='Close' onPress={handleOnClose} />
      </View> */}
    </Modal>
  )
}

export default HabitForm;


const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    // width: '100%',
    backgroundColor: '#ccc',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  nameStyle: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
    backgroundColor: '#ddd'
  },
  factorStyle: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 8,
    backgroundColor: '#ddd'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  button: {
    // flex: 1,
    // margin: 8,
    width: '45%',
    paddingVertical: 8,

  }
});
