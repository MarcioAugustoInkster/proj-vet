import './button.css';
import PropTypes from 'prop-types';

const Button = (props) => {
    const { type, text } = props;

    return (
        <button 
            type={type === undefined ? 'button' : type} 
            className="button"
        >{text}</button>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired
}

export default Button;
