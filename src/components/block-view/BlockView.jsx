import './block-view.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BlockView = (props) => {
    const { image, title, text, link } = props;
    const blockimg = { width: 110, height: 110 };

    return (
        <div className="flex-block-view">
            <div className="flex-block-view__block-item">
                <img 
                    src={image} 
                    alt="Female Doctor" 
                    className="flex-block-view__block-item__item-image"
                    {...blockimg}
                />
                <div className="flex-block-view__block-item__item-content">
                    <h6 className="flex-block-view__block-item__item-content__content-title">{title}</h6>
                    <p className="flex-block-view__block-item__item-content__content-text">{text}</p>
                    <Link to={link} className="flex-block-view__block-item__item-content__content-link">saiba mais</Link>
                </div>
            </div>
        </div>
    )
}

BlockView.propTypes = {
    image: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default BlockView;
