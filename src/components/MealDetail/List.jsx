import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

function List({ data }) {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

List.propTypes = {
  data: PropTypes.array,
};

List.defaultProps = {
  data: [],
};

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#E2B497',
  },
  itemText: {
    color: '#351401',
    textAlign: 'center',
  },
});
