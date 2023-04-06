import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';

function IconButton({ icon, color, onPress }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
}

IconButton.propTypes = {
  onPress: PropTypes.func,
  icon: PropTypes.string,
  color: PropTypes.string,
};

IconButton.defaultProps = {
  onPress: () => {},
  icon: '',
  color: '',
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
