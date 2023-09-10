import { Link } from 'react-router-dom';
import './example.scss';
import BootstrapIcon from '../../../components/icons/BootstrapIcon';

const Example = () => {
    return (
        <section className="section">
            <div className="section-header">
                <h1 className="section-h1">Agendamento</h1>
                <h4 className="section-h4">Encontre os profissionais disponíveis de acordo com o dia da semana</h4>
            </div>
            <div className="list-content">
                <ul className="list-content__list">
                    <li className="list-content__list__row">
                        <div className="list-content__list__row__list-row">
                            <BootstrapIcon cname="calendar2" size="4" />
                            <div className="list-content__list__row__list-row__box">
                                <h1>Segunda á Sexta</h1>
                                <Link to="/" className="list-content__list__row__list-row__box__r-link">Consultar</Link>
                            </div>
                        </div>
                    </li>
                    <li className="list-content__list__row">
                        <div className="list-content__list__row__list-row">
                            <BootstrapIcon cname="calendar2" size="4" />
                            <div className="list-content__list__row__list-row__box">
                                <h1>Sábados e Domingos</h1>
                                <Link to="/" className="list-content__list__row__list-row__box__r-link">Consultar</Link>
                            </div>
                        </div>
                    </li>
                    <li className="list-content__list__row">
                        <div className="list-content__list__row__list-row">
                            <BootstrapIcon cname="calendar2" size="4" />
                            <div className="list-content__list__row__list-row__box">
                                <h1>Feriados</h1>
                                <Link to="/" className="list-content__list__row__list-row__box__r-link">Consultar</Link>
                            </div>
                        </div>
                    </li>
                    <li className="list-content__list__row">
                        <div className="list-content__list__row__list-row">
                            <BootstrapIcon cname="calendar2" size="4" />
                            <div className="list-content__list__row__list-row__box">
                                <h1>Plantão</h1>
                                <Link to="/" className="list-content__list__row__list-row__box__r-link">Consultar</Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Example;
