import PropTypes from 'prop-types';

export const screenPropTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    setOptions: PropTypes.func.isRequired,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

export const screenDefaultProps = {};

export const childrenPropTypes = { children: PropTypes.node };

export const childrenDefaultProps = { children: undefined };
