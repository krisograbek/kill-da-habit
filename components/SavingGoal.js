import React from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import { theme } from '../global.styles';
import ProgressBar from './ProgressBar';

const SavingGoal = ({ isVisible, setIsVisible, goal, saved }) => {
  const { name, price } = goal;
  const progressPercent = parseInt(saved / price * 100)
  const handleOnClose = () => {
    setIsVisible(false);
  }
  return (
    <Modal visible={isVisible} animationType='slide' onRequestClose={handleOnClose} >
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            Your Goal
          </Text>
        </View>
        <View style={styles.goalContainer}>
          <View>
            <Text>
              Image Placeholder
            </Text>
          </View>
          <View>
            <Text>
              {goal.name}
            </Text>
          </View>
          <View>
            <Text>
              Price: {goal.price}€
            </Text>
          </View>
        </View>
        <ProgressBar progress={saved / goal.price} mainStyles={{ height: 40 }} />
        <View style={styles.progressContainer}>
          <Text style={[styles.progressText, { color: theme.colors.primary }]}>
            {saved}€/{goal.price}€&nbsp;({progressPercent}%)
          </Text>
          <Text style={[styles.progressText, { color: theme.colors.secondary }]}>
            {goal.price - saved}€ left
          </Text>
        </View>
        {/* <View style={styles.progressBar}> */}
        {/* </View> */}
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
    fontWeight: "600",
  },
  goalContainer: {
    flex: 2,
    width: "100%",
    alignItems: 'center',
    padding: 8,
    margin: 12,
    borderWidth: 1,
  },
  progressContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    padding: 16,
  },
  progressBar: {
    flex: 1,
  },
  progressText: {
    fontSize: 20,
    fontWeight: "600",
    paddingHorizontal: 4,
  },
  button: {
    width: '45%',
    paddingVertical: 8,
  }
})
