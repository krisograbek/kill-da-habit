import React from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import { theme } from '../global.styles';

const SavingGoal = ({ isVisible, setIsVisible }) => {
  const handleOnClose = () => {
    setIsVisible(false);
  }
  return (
    <Modal visible={isVisible}>
      <View>
        <Text>
          SavingGoal
        </Text>
      </View>
      <View style={styles.button}>
        <Button testID='closeButton' title='Cancel' onPress={handleOnClose} color={theme.colors.secondary} />
      </View>
    </Modal>
  )
}

export default SavingGoal;

const styles = StyleSheet.create({
  button: {
    width: '45%',
    paddingVertical: 8,
  }
})
