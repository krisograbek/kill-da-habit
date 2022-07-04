import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text>
        Header
      </Text>
      {/* <Text>
        Header
      </Text> */}
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
