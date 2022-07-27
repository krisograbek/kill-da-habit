import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from '../global.styles';

const ProgressBar = ({ progress, mainStyles }) => {
  return (
    <View style={[styles.mainContainer, mainStyles]}>
      <View style={[styles.leftSide, { flex: progress }]}>
      </View>
      <View style={[styles.rightSide, { flex: (1 - progress) }]}>
      </View>
    </View>
  )
}

export default ProgressBar;

const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
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
