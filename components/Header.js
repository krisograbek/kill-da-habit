import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import ProgressBar from './ProgressBar';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <ProgressBar progress={0.7} />
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});
