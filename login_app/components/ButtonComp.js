import { StyleSheet, TouchableOpacity, Text} from 'react-native';

const ButtonComp = ({ text }) => {
  return (
  <TouchableOpacity style={styles.sesionButton}>
    <Text style={styles.text}> {text} </Text>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  sesionButton: {
    width: 250,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F05050',
    borderRadius: 8,
    marginBottom: 40
  },
  text: {
    fontSize: 15,
    fontWeight: "700",
    color: '#FAFAFA'
  }
});

export default ButtonComp;
