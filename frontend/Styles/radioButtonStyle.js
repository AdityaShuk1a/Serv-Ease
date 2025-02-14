import { StyleSheet } from 'react-native'; 


export const radioButtonStyles = StyleSheet.create({
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioUnselected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#026977',
    marginRight: 8,
  },
  radioSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#026977',
    borderWidth: 2,
    borderColor: '#026977',
    marginRight: 8,
  },
  radioText: {
    fontSize: 12,
    color: '#026977',
  },
});