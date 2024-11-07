import { addTodo } from '@/entities/redux/store/taskSlice';
import CustomButton from '@/shared/CustomButton/CustomButton';
import { Colors, Fonts, Gaps, Radius } from '@/shared/tokens';
import { useRef, useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';

export default function Form() {
  const ref_input2 = useRef<TextInput | null>(null);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const dispatch = useDispatch();
  const onSubmitTask = () => {
    if (title.trim().length === 0 && desc.trim().length === 0) {
      Alert.alert('Please enter a task');
      setTitle('');
      setDesc('');
      return;
    }
    dispatch(addTodo({ title: title, desc: desc }));
    setTitle('');
    setDesc('');
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Task title"
        returnKeyType="next"
        onSubmitEditing={() => ref_input2.current?.focus()}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Task description"
        ref={ref_input2}
        value={desc}
        onChangeText={setDesc}
      />
      <CustomButton
        lable="Add"
        onPress={() => {
          onSubmitTask();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.gray,
    borderRadius: Radius.r10,
    padding: 20,
    marginBottom: 20,
    gap: Gaps.g20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: Colors.lightBlack,
    borderRadius: Radius.r10,
    padding: 10,
    fontFamily: Fonts.regular,
    fontSize: Fonts.f18,
    color: Colors.lightBlack,
  },
});
