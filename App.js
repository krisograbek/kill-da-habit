import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import HabitForm from './components/HabitForm';
import Habits from './components/Habits';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import { theme } from './global.styles';

export default function App() {
  const [createHabitVisible, setCreateHabitVisible] = useState(false);
  const [habitList, setHabitList] = useState([]);
  return (
    <View style={styles.appContainer}>
      <Header>
        <ProgressBar progress={0.03} />
        <Pressable style={styles.button} onPress={() => setCreateHabitVisible(true)}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </Header>
      <Habits habitList={habitList} />
      <HabitForm isVisible={createHabitVisible} setIsVisible={setCreateHabitVisible} setHabitList={setHabitList} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 50,
    backgroundColor: theme.colors.secondary,
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: 'center',
    margin: 12,
  },
  buttonText: {
    fontSize: 28,
    fontWeight: "700",
    color: 'white',
  }
});
