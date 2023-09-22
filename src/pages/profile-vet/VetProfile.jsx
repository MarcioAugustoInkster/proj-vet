import { useParams } from 'react-router-dom';
import './vet-profile.scss'
import { Fragment, useEffect, useState } from 'react';
import vetprofile from './../../utils/services-mock.json';
import BootstrapIcon from '../../components/icons/BootstrapIcon';

const VetProfile = () => {
    const { code } = useParams();

    const [profile, setProfile] = useState();
    const [stars, setStars] = useState([]);
    
    useEffect(() => {
        if (vetprofile !== undefined) {
            const result = vetprofile?.result.find(res => res.code.toLowerCase() === code.toLowerCase());
            if (result !== undefined) {
                let ratings = [];
                for (let i = 1; i <= 5; i++) {
                    if (result.evaluation < i && result.evaluation > (i - 1)) {
                        ratings.push('star-half');
                    } else if (result.evaluation >= i) {
                        ratings.push('star-fill');
                    } else {
                        ratings.push('star');
                    }
                }
                setStars(ratings);
                setProfile(result);
            }
        }
    }, [code]);

    return (
        <section className="section-vet">
            {profile !== undefined
            ?
            <>
                <div className="section-header">
                    <h1 className="section-h1">Perfil{profile.code.includes('vet') ? ' Veterinário' : ' Clínico'}</h1>
                </div>
                <div className="section-vet__container">
                    <div className="section-vet__container__bg-view"></div>
                    <div className="section-vet__container__group">
                        <div className="section-vet__container__group__aside">
                            <div className="section-vet__container__group__aside__portrait">
                                <img src={profile.image_url_md} alt={profile.fullname} width="200" height="200" />
                            </div>
                            <ul className="section-vet__container__group__aside__list">
                                <li>
                                    <span className="l-label">CRMV</span>
                                    <strong className="l-info">{profile.crmv}</strong>
                                </li>
                                <li>
                                    <span className="l-label">Experiência</span>
                                    <strong className="l-info">{profile.experience} anos</strong>
                                </li>
                                <li>
                                    <span className="l-label">Início em</span>
                                    <strong className="l-info">{profile.start_date}</strong>
                                </li>
                                <li>
                                    <span className="l-label">Status</span>
                                    <strong className="l-info">
                                        {profile.available ? 'Disponível' : 'Indisponível'}
                                    </strong>
                                </li>
                            </ul>
                        </div>
                        <div className="section-vet__container__group__content">
                            <div className="section-vet__container__group__content__header">
                                <h1 className="section-vet__container__group__content__header__h1">{profile.fullname}</h1>
                                <h4 className="section-vet__container__group__content__header__h4">{profile.occupation}</h4>
                            </div>
                            <div className="section-vet__container__group__content__panel">
                                <div className="section-vet__container__group__content__panel__selection">
                                    <h1 className="section-vet__container__group__content__panel__selection__title">Avaliação</h1>
                                    <div className="section-vet__container__group__content__panel__selection__p-flex">
                                        <span className="section-vet__container__group__content__panel__selection__p-flex__view">{profile.evaluation.toFixed(1)}</span>
                                        <div className="section-vet__container__group__content__panel__selection__p-flex__f-grid">
                                            {stars.map((star, index) =>
                                            <div className="section-vet__container__group__content__panel__selection__p-flex__f-grid__block" key={index}>
                                                <BootstrapIcon cname={star} size="2" styled={true} />
                                            </div>)}
                                        </div>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="section-vet__container__group__content__panel__section">
                                    <h1 className="section-vet__container__group__content__panel__section__title">Endereço</h1>
                                    <div className="section-vet__container__group__content__panel__section__s-row">
                                        <div className="section-vet__container__group__content__panel__section__s-row__s-col">
                                            <strong className="section-vet__container__group__content__panel__section__s-row__s-col__label">CEP:</strong>
                                            <span className="section-vet__container__group__content__panel__section__s-row__s-col__text">{profile.info.location.zipcode}</span>
                                        </div>
                                        <div className="section-vet__container__group__content__panel__section__s-row__s-col">
                                            <strong className="section-vet__container__group__content__panel__section__s-row__s-col__label">Endereço:</strong>
                                            <span className="section-vet__container__group__content__panel__section__s-row__s-col__text">{profile.info.location.address}, {profile.info.location.number}</span>
                                        </div>
                                        <div className="section-vet__container__group__content__panel__section__s-row__s-col">
                                            <strong className="section-vet__container__group__content__panel__section__s-row__s-col__label">Bairro:</strong>
                                            <span className="section-vet__container__group__content__panel__section__s-row__s-col__text">{profile.info.location.district}</span>
                                        </div>
                                        <div className="section-vet__container__group__content__panel__section__s-row__s-col">
                                            <strong className="section-vet__container__group__content__panel__section__s-row__s-col__label">Cidade:</strong>
                                            <span className="section-vet__container__group__content__panel__section__s-row__s-col__text">{profile.info.location.city} - {profile.info.location.state}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="section-vet__container__group__content__panel__section">
                                    <h1 className="section-vet__container__group__content__panel__section__title">Horários</h1>
                                    <div className="section-vet__container__group__content__panel__section__s-row">
                                        {profile.info.schedules.map((item, index) =>
                                        <Fragment key={index}>
                                            <div className="section-vet__container__group__content__panel__section__s-row__s-col">
                                                <strong className="section-vet__container__group__content__panel__section__s-row__s-col__label">{item.weekday}</strong>
                                            </div>
                                            {item.hours.map((res, jndex) =>
                                            <div className="section-vet__container__group__content__panel__section__s-row__s-col ml-2" key={jndex}>
                                                <strong className="section-vet__container__group__content__panel__section__s-row__s-col__label">Horário:</strong>
                                                <span className="section-vet__container__group__content__panel__section__s-row__s-col__text">de {res.from} á {res.to}</span>
                                            </div>)}
                                        </Fragment>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            :
            <span>Profile could not be found</span>}
        </section>
    )
}

export default VetProfile;
