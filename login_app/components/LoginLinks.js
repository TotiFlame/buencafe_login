import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

const LoginLinks = ({ text }) => {
  return (
    <TouchableWithoutFeedback>
      <Text style={styles.text_link}>{text}</Text>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
text_link: {
    color: '#466787',
    fontWeight: '500',
    fontSize: 14,
    marginBottom: 16,
}
});

export default LoginLinks;