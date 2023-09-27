import { StyleSheet } from 'react-native';
import { colors } from './globalStyle';

export default (small, inversed) => StyleSheet.create({
  button: {
    width: 140,
    paddingVertical: small ? 3 : 9,
    paddingHorizontal: 20,
    backgroundColor: inversed ? colors.orange : colors.purple,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  value: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: inversed ? colors.purple : colors.orange,
  }
});