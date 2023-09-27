import { StyleSheet } from 'react-native';
import { colors } from './globalStyle';

export default StyleSheet.create({
  content: {
    backgroundColor: colors.purple,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 24,
  },
  total: {
    alignItems: 'center',
  },
  description: {
    fontSize: 16,
    color: colors.light,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 6,
    color: colors.orange,
  },
  button: {
    flexGrow: 1,
    alignItems: 'flex-end',
  },
});