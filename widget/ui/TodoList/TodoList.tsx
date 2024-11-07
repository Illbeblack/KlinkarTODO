import { FlatList, StyleSheet } from 'react-native';
import TodoItem from '../TodoItem/TodoItem';
import { useSelector } from 'react-redux';
import { IRootState, IStore } from '@/entities/redux/store/types';

export default function TodoList() {
  const todos = useSelector<IRootState, IStore[]>((state) => state.tasks);

  return (
    <FlatList
      style={styles.container}
      data={todos}
      renderItem={({ item }) => <TodoItem todo={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    height: '60%',
  },
});
