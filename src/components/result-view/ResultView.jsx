import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './result-view.scss';

const ResultView = (props) => {
    const { data } = props;

    return (
        <div className="grid-row">
            <div className="grid-row__row-side">
                <div className="grid-row__row-side__side-picture img-rounded">
                    <img src={data.image_url_sm} alt={data.fullname} width="100" height="100" />
                </div>
                <Link to={`/perfil-veterinario/${data.code}`} className="grid-row__row-side__side-link">Ver perfil</Link>
            </div>
            <div className="grid-row__row-block">
                <div className="grid-row__row-block__block-cover">
                    <h4 className="grid-row__row-block__block-cover__cover-header">{data.fullname}</h4>
                    <div className="grid-row__row-block__block-cover__cover-status">
                        <span className="grid-row__row-block__block-cover__cover-status__status-label">Avaliação:</span>
                        <span className="grid-row__row-block__block-cover__cover-status__status-text">{data.evaluation}</span>
                    </div>
                </div>
                <ul className="grid-row__row-block__content-list">
                    <li>
                        <strong className="li-label">CRMV:</strong>
                        <span className="li-text">{data.crmv}</span>
                    </li>
                    <li>
                        <strong className="li-label">Especialização:</strong>
                        <span className="li-text">{data.occupation}</span>
                    </li>
                    <li>
                        <strong className="li-label">Experiência:</strong>
                        <span className="li-text">{data.experience} anos</span>
                    </li>
                    <li>
                        <strong className="li-label">Formado em:</strong>
                        <span className="li-text">{data.start_date}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

ResultView.propTypes = {
    data: PropTypes.shape({
        image_url_sm: PropTypes.string.isRequired,
        fullname: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
        evaluation: PropTypes.number.isRequired,
        crmv: PropTypes.string.isRequired,
        occupation: PropTypes.string.isRequired,
        experience: PropTypes.string.isRequired,
        start_date: PropTypes.string.isRequired
    })
}

export default ResultView;
