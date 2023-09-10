import BootstrapIcon from '../icons/BootstrapIcon';
import './input-text.css';
import PropTypes from 'prop-types';

export const InputText = (props) => {
    return (
        <div className="input-group">
            <label htmlFor={props.cid} className="label-icon">
                <BootstrapIcon cname={props.icon} size="2" />
            </label>
            <input
                type="text"
                className="input-text"
                id={props.cid}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.pholder === undefined ? '' : props.pholder}
                required={props.required}
                autoComplete="off"
            />
            {props.required ? <span className="required">*</span> : ''}
        </div>
    )
}

InputText.propTypes = {
    cid: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    icon: PropTypes.string.isRequired,
    required: PropTypes.bool,
    pholder: PropTypes.string,
}

export const InputTextRef = (props) => {
    return (
        <div className="input-group">
            <label htmlFor={props.cid} className="label-icon">
                <BootstrapIcon cname={props.icon} size="2" />
            </label>
            <input
                type="text"
                className="input-text"
                id={props.cid}
                placeholder={props.pholder === undefined ? '' : props.pholder}
                required={props.required}
                autoComplete="off"
            />
            {props.required ? <span className="required">*</span> : ''}
        </div>
    )
}

InputTextRef.propTypes = {
    cid: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    required: PropTypes.bool,
    pholder: PropTypes.string,
}

export const InputEmail = (props) => {
    return (
        <div className="input-group">
            <label htmlFor={props.cid} className="label-icon">
                <BootstrapIcon cname={props.icon} size="2" />
            </label>
            <input
                type="email"
                className="input-text"
                id={props.cid}
                placeholder={props.pholder === undefined ? '' : props.pholder}
                required={props.required}
                autoComplete="off"
            />
            {props.required ? <span className="required">*</span> : ''}
        </div>
    )
}

InputEmail.propTypes = {
    cid: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    required: PropTypes.bool,
    pholder: PropTypes.string,
}

export const Select = (props) => {
    return (
        <div className="input-group">
            <label htmlFor={props.cid} className="label-icon">
                <BootstrapIcon cname={props.icon} size="2" />
            </label>
            <select
                className="input-text"
                id={props.cid}
                required={props.required}
            >
                {props.label !== undefined && <option>--- {props.label} ---</option>}
                {props.items.map((item, index) => 
                <option value={item.value} key={index}>{item.text}</option>)}
            </select>
            {props.required ? <span className="required">*</span> : ''}
        </div>
    )
}

Select.propTypes = {
    items: PropTypes.array,
    cid: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    label: PropTypes.string,
    required: PropTypes.bool,
}

export const InputPassword = (props) => {
    return (
        <div className="input-group">
            <label htmlFor={props.cid} className="label-icon">
                <BootstrapIcon cname={props.icon} size="2" />
            </label>
            <input
                type="password"
                className="input-text"
                id={props.cid}
                placeholder={props.pholder === undefined ? '' : props.pholder}
                required={props.required}
                autoComplete="off"
            />
            {props.required ? <span className="required">*</span> : ''}
        </div>
    )
}

InputPassword.propTypes = {
    cid: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    required: PropTypes.bool,
    pholder: PropTypes.string,
}

export const TextArea = (props) => {
    return (
        <div className="input-group">
            <textarea className="text-area" placeholder={props.pholder}></textarea>
            {props.required ? <span className="required">*</span> : ''}
        </div>
    )
}

TextArea.propTypes = {
    pholder: PropTypes.string.isRequired,
    required: PropTypes.bool,
}
