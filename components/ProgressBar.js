import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from '../global.styles';

const ProgressBar = ({ progress, setShowGoalVisible }) => {
  return (
    // <View >
    <Pressable style={styles.mainContainer} onPress={() => setShowGoalVisible(true)}>
      <View style={[styles.leftSide, { flex: progress }]}>
      </View>
      <View style={[styles.rightSide, { flex: (1 - progress) }]}>
      </View>
      {/* <Text style={styles.text}>
        {progress}
      </Text> */}
    </Pressable>
    // </View>
  )
}

export default ProgressBar;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'stretch',
    paddingHorizontal: 8,
    // paddingTop: 6,
    height: '80%',
    margin: 6,
  },
  leftSide: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: theme.colors.primary,
  },
  rightSide: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: theme.colors.primaryDark,
  },
  text: {
    // color: 'white'
  }
})
