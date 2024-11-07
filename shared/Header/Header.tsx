import { StyleSheet, Text } from 'react-native';
import { Colors, Fonts } from '../tokens';

export default function Header({ title }: { title: string }) {
  return <Text style={styles.title}>{title}</Text>;
}
const styles = StyleSheet.create({
  title: {
    color: Colors.black,
    alignSelf: 'center',
    marginBottom: 20,
    fontFamily: Fonts.semibold,
    fontSize: Fonts.f20,
  },
});
