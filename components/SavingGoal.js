import React, { useState } from 'react'
import { Button, Image, Modal, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { theme } from '../global.styles';
import ProgressBar from './ProgressBar';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const SavingGoal = ({ isVisible, setIsVisible, goal, saved }) => {
  const { name, price, img } = goal;
  const [image, setImage] = useState(null);
  const [imageStyles, setImageStyles] = useState({ height: "100%", aspectRatio: 1 })

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      // aspect: [4, 3],
      quality: 1,
    });

    // console.log("Result", result);

    if (!result.cancelled) {
      setImage(result.uri);
      // calculate aspect ratio
      const ratio = result.width / result.height;
      // if image is horizontal, use 100% width
      // otherwise use 100% height
      if (ratio < 1) {
        setImageStyles({ height: "100%", aspectRatio: ratio })
      } else {
        setImageStyles({ width: "100%", aspectRatio: ratio })
      }
    }
  };

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
            {!image ? (
              <Button title='upload image' onPress={pickImage} color={theme.colors.secondary} />
            ) : (
              <Pressable onPress={pickImage}>
                <Image source={{ uri: image }} style={imageStyles} />
              </Pressable>
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
    justifyContent: "center",
    alignContent: "stretch",
    // backgroundColor: "green"
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
