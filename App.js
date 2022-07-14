import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import HabitForm from './components/HabitForm';
import Habits from './components/Habits';
import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import SavingGoal from './components/SavingGoal';
import { theme } from './global.styles';

export default function App() {
  const [createHabitVisible, setCreateHabitVisible] = useState(false);
  const [isGoalModalVisible, setIsGoalModalVisible] = useState(false);
  const [habitList, setHabitList] = useState([]);
  const [currentGoal, setCurrentGoal] = useState({ name: "Headphones", price: 99.99, img: "" })
  return (
    <View style={styles.appContainer}>
      <Header>
        <Pressable style={styles.progressContainer} onPress={() => setIsGoalModalVisible(true)}>
          <ProgressBar progress={0.3} mainStyles={{ flex: 0.5, paddingHorizontal: 12, paddingVertical: 6, }} />
        </Pressable>
        <Pressable style={styles.button} onPress={() => setCreateHabitVisible(true)}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </Header>
      <Habits habitList={habitList} />
      <HabitForm isVisible={createHabitVisible} setIsVisible={setCreateHabitVisible} setHabitList={setHabitList} />
      <SavingGoal isVisible={isGoalModalVisible} setIsVisible={setIsGoalModalVisible} goal={currentGoal} saved={10} />
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
  progressContainer: {
    flex: 1,
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
