import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';
import { useState } from 'react';

export default function CustomButton({
  lable,
  ...props
}: PressableProps & { lable: string }) {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <Pressable
      {...props}
      onPressIn={() => setClicked(true)}
      onPressOut={() => setClicked(false)}
      style={{
        ...styles.button,
        backgroundColor: clicked ? Colors.primaryHover : Colors.primary,
      }}
    >
      <Text style={styles.lable}>{lable}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: Radius.r10,
  },
  lable: {
    color: Colors.white,
    fontSize: Fonts.f18,
    fontFamily: Fonts.regular,
  },
});
