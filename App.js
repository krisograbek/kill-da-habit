import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import HabitForm from './components/HabitForm';
import Habits from './components/Habits';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';

export default function App() {
  const [createHabitVisible, setCreateHabitVisible] = useState(false);
  const [habitList, setHabitList] = useState([]);
  return (
    <View style={styles.container}>
      <Header>
        <ProgressBar progress={0.7} />
        <Button title='Add Habit' onPress={() => setCreateHabitVisible(true)} />
      </Header>
      <Habits habitList={habitList} />
      <HabitForm isVisible={createHabitVisible} setIsVisible={setCreateHabitVisible} setHabitList={setHabitList} />
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
