import { StyleSheet, Text, View } from 'react-native';

import { childrenDefaultProps, childrenPropTypes } from 'utils/prop-types';

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

Subtitle.propTypes = { ...childrenPropTypes };

Subtitle.defaultProps = { ...childrenDefaultProps };

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 12,
    borderBottomColor: '#E2B497',
    borderBottomWidth: 2,
  },
  subtitle: {
    color: '#E2B497',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
