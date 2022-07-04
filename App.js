import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Habits from './components/Habits';
import Header from './components/Header';

export default function App() {
  // const [habitList, setHabitList] = useState([{ name: "habit1" }, { name: "habit2" },]);
  const [habitList, setHabitList] = useState([]);
  return (
    <View style={styles.container}>
      <Header />
      <Habits habitList={habitList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
