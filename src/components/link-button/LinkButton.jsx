import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './link-button.css';

const LinkButton = ({href, text, hasArrow}) => {
  return <Link to={href} className={`link-button${hasArrow ? ' lk-arrow' : ''}`} role="button">{text}</Link>
}

LinkButton.propTypes = {
    href: PropTypes.string,
    text: PropTypes.string,
    hasArrow: PropTypes.bool
}

export default LinkButton;
