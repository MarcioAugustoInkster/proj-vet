import './bootstrap-icon.css';
import PropTypes from 'prop-types';

const BootstrapIcon = ({cname, size, styled = false}) => {
    return <i className={`bi bi-${cname} ${styled === false ? 'b-icon-white' : 'b-icon-black'} b-size-${size === undefined ? 1 : size}`}></i>
}

BootstrapIcon.propTypes = {
    cname: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    styled: PropTypes.bool
}

export default BootstrapIcon;
