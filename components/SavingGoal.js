import React from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import { theme } from '../global.styles';
import ProgressBar from './ProgressBar';

const SavingGoal = ({ isVisible, setIsVisible, goal, saved }) => {
  const { name, price, img } = goal;
  const progressPercent = parseInt(saved / price * 100)
  const handleOnClose = () => {
    setIsVisible(false);
  }
  return (
    <Modal visible={isVisible} animationType='slide' onRequestClose={handleOnClose} >
      <View style={styles.mainContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>
            Your Goal
          </Text>
        </View>
        <View style={styles.goalContainer}>
          <View style={styles.imageContainer}>
            {img === "" ? (
              <Button title='upload image' onPress={() => { console.log("Upload Pressed") }} color={theme.colors.secondary} />
            ) : (
              <Text>{img}</Text>
            )}
          </View>
          <View>
            <Text style={styles.text}>
              {goal.name}
            </Text>
          </View>
          <View>
            <Text style={styles.text}>
              Price: {goal.price}€
            </Text>
          </View>
        </View>
        <ProgressBar progress={saved / goal.price} mainStyles={{ height: 40 }} />
        <View style={styles.progressContainer}>
          <Text style={[styles.text, { color: theme.colors.primary }]}>
            {saved}€/{goal.price}€&nbsp;({progressPercent}%)
          </Text>
          <Text style={[styles.text, { color: theme.colors.secondary }]}>
            {goal.price - saved}€ left
          </Text>
        </View>
        {/* <View style={styles.progressBar}> */}
        {/* </View> */}
        <View style={styles.button}>
          <Button testID='closeButton' title='Return' onPress={handleOnClose} color={theme.colors.secondary} />
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
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
  goalContainer: {
    flex: 3,
    width: "100%",
    alignItems: 'center',
    padding: 8,
    margin: 12,
    borderWidth: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center"
  },
  progressContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
  },
  progressBar: {
    flex: 1,
  },
  button: {
    width: '45%',
    paddingVertical: 8,
  }
})
