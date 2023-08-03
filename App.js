import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TaskList from './components/task/TaskList';

export default function App() {
  return (
    <View >
      <TaskList/> 
    </View>
  );
}

