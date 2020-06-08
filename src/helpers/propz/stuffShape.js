import PropTypes from 'prop-types';

const stuffShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { stuffShape };
