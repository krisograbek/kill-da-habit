import React from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import { theme } from '../global.styles';

const SavingGoal = ({ isVisible, setIsVisible, goal, saved }) => {
  const handleOnClose = () => {
    setIsVisible(false);
  }
  return (
    <Modal visible={isVisible} animationType='slide'>
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            Your Goal
          </Text>
        </View>
        <View style={styles.goalContainer}>
          <View>
            <Text>
              {goal.name}
            </Text>
          </View>
          <View>
            <Text>
              Image Placeholder
            </Text>
          </View>
        </View>
        <View>
          <Text>
            Already saved {saved}
          </Text>
          <Text>Still to go {goal.price - saved}</Text>
        </View>
        <View style={styles.button}>
          <Button testID='closeButton' title='Cancel' onPress={handleOnClose} color={theme.colors.secondary} />
        </View>
      </View>
    </Modal>
  )
}

export default SavingGoal;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 12,
    alignItems: "center",
    // width: '100%',
  },
  titleContainer: {
    padding: 8
  },
  titleText: {
    fontSize: 20,
  },
  goalContainer: {
    alignItems: 'center',
    padding: 8,
    margin: 12,
    borderWidth: 1,
  },
  button: {
    width: '45%',
    paddingVertical: 8,
  }
})
