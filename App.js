import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import HabitForm from './components/HabitForm';
import Habits from './components/Habits';
import Header from './components/Header';

export default function App() {
  const [createHabitVisible, setCreateHabitVisible] = useState(false);
  const [habitList, setHabitList] = useState([]);
  return (
    <View style={styles.container}>
      <Header />
      <Habits habitList={habitList} />
      <HabitForm isVisible={createHabitVisible} setIsVisible={setCreateHabitVisible} setHabitList={setHabitList} />
      <Button title='Add Habit' onPress={() => setCreateHabitVisible(true)} />
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
