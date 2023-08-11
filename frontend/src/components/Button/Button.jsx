
import PropTypes from 'prop-types';
import { styles } from '../../styles/styles';

const Button = ({ onClick, label, variant }) => {

  switch (variant) {
    case 'primary':
      styles.buttonStyle += ' bg-green-700 hover:bg-lime-600 mt-2';
      break;
    case 'secondary':
      styles.buttonStyle += ' bg-gray-500 hover:bg-gray-600';
      break;
    // Add more variants if needed
    default:
      styles.buttonStyle += ' bg-blue-500 hover:bg-blue-600';
  }

  return (
    <button className={styles.buttonStyle } onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']), 
};

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
