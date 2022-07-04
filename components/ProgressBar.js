import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.leftSide, { flex: progress }]}>
        <Text>
          Progress
        </Text>
      </View>
      <View style={[styles.rightSide, { flex: (1 - progress) }]}>
        <Text>
          Still to go
        </Text>
      </View>
    </View>
  )
}

export default ProgressBar;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    // paddingVertical: 8,
    paddingHorizontal: 16,
    height: '80%',
    width: '60%',
  },
  leftSide: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    backgroundColor: 'powderblue',
  },
  rightSide: {
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: 'skyblue',
  },
})
