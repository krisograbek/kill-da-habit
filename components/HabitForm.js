import React, { useState } from 'react'
import { Button, Modal, StyleSheet, Text, TextInput, View } from 'react-native';
import { theme } from '../global.styles';

const initialHabit = { name: "", factor: "" };

const HabitForm = ({ isVisible, setIsVisible, setHabitList }) => {
  const [habit, setHabit] = useState(initialHabit);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [factor, setFactor] = useState(null);
  const [factorError, setFactorError] = useState("");

  const validateForm = () => {
    let validationPassed = true;
    setNameError("");
    setFactorError("");
    if (name.length < 1) {
      setNameError("Name field is required");
      validationPassed = false;
    }
    try {
      const parsed = parseFloat(factor);
      if (isNaN(parsed)) {
        setFactorError("Factor must be a valid number");
        validationPassed = false;
      }

      if (parsed < 0.01) {
        setFactorError("Factor must be greater than 0.01");
        validationPassed = false;
      }

    } catch (error) {
      // console.log(error);
      setFactorError(error.msg);
      validationPassed = false;
    }
    return validationPassed;
  }

  const handleOnAddHabit = () => {
    const validationResult = validateForm();
    if (validationResult === true) {
      const newHabit = { name: name, factor: parseFloat(factor) }
      setHabitList(prevState => [...prevState, newHabit]);
      setIsVisible(false);
    }
    else {
      // console.log("Sorry man")
    }
    // setHabit(initialHabit);

  }

  const handleNameChange = (enteredText) => {
    setName(enteredText);
  }

  const handleFactorChange = (enteredText) => {
    setFactor(enteredText);
  }

  const handleOnClose = () => {
    setIsVisible(false);
    setName("");
    setNameError("");
    setFactor(0.0)
    setFactorError("")
  }

  return (
    <Modal testID='modal' visible={isVisible} animationType="slide">
      <View style={styles.formContainer}>
        <Text style={{ fontSize: 20, marginVertical: 16, textAlign: 'center' }}>
          Add the habit you want to break
        </Text>
        <View style={styles.nameStyle}>
          <TextInput testID='name' value={name} placeholder='Name' onChangeText={handleNameChange} />
        </View>
        {(nameError.length > 0) && <Text testID='nameError' style={{ color: "red" }}>{nameError}</Text>}
        <View style={styles.factorStyle}>
          <TextInput testID='factor' value={factor} keyboardType='numeric' placeholder='Factor' onChangeText={handleFactorChange} />
        </View>
        {(factorError.length > 0) && <Text testID='factorError' style={{ color: "red" }}>{factorError}</Text>}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button testID='closeButton' title='Cancel' onPress={handleOnClose} color={theme.colors.secondary} />
          </View>
          <View style={styles.button}>
            <Button testID='submitButton' title='Create Habit' onPress={handleOnAddHabit} color={theme.colors.primary} />
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
