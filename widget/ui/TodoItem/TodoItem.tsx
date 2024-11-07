import { View, Text, StyleSheet } from 'react-native';

import { Colors, Fonts, Gaps, Radius } from '../../../shared/tokens';
import CustomButton from '../../../shared/CustomButton/CustomButton';
import { deleteTodo } from '@/entities/redux/store/taskSlice';
import { useDispatch } from 'react-redux';

export default function TodoItem({ todo }: any) {
  const dispatch = useDispatch();
  const deleteItemHandler = (id: string) => {
    dispatch(deleteTodo({ id: id }));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{todo.title}</Text>
      <Text style={styles.text}>{todo.desc}</Text>
      <View style={styles.wrapper}>
        <CustomButton
          lable="Delete"
          onPress={() => deleteItemHandler(todo.id)}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: Radius.r10,
    padding: 15,
    gap: Gaps.g10,
    marginBottom: 20,
  },
  title: {
    color: Colors.black,
    fontFamily: Fonts.semibold,
    fontSize: Fonts.f18,
  },
  text: {
    color: Colors.black,
    fontFamily: Fonts.regular,
    fontSize: Fonts.f14,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
