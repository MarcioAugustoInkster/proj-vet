import './home.css';
import BlockView from '../../components/block-view/BlockView';
import picFemaleVetDoctor from '../../assets/images/backgrounds/pet-vet-cockatiel-care.jpg';
import picSmartphoneWithGpsNavigator from '../../assets/images/backgrounds/smartphone-with-gps-navigator.jpg';
import BootstrapIcon from '../../components/icons/BootstrapIcon';
import { zpiCodeMask } from '../../utils/FieldMask';
import { Fragment, useEffect, useState } from 'react';
import servicesMock from '../../utils/services-mock.json';
import { apiRouter } from '../../api/apiRouter';

const Home = () => {
    const [zipCode, setZipCode] = useState('');
    const [status, setStatus] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const onZipCodeChange = (zipCode) => {
        setZipCode(zpiCodeMask(zipCode));
    }

    const onClickSearch = (event) => {
        event.preventDefault();

        if (results?.length > 0) {
            setResults([]);
        }
        if (zipCode.trim().length < 8) {
            let input = document.querySelector('.input-search');
            input.classList.add('bg-focus');
            input.focus();
            setTimeout(() => {
                input.classList.remove('bg-focus');
            }, 500);
            setStatus('Informe um CEP');
            return;
        }
        setStatus('Buscando informações...');
        setIsLoading(true);
    }

    const onZipCodeClean = () => {
        setZipCode('');
        let input = document.querySelector('.input-search');
        input.focus();
        setStatus('');
    }

    const timeOut = (items, message, time) => {
        setTimeout(() => {
            setResults(items);
            setIsLoading(false);
            setStatus(message);
        }, time);
    }

    useEffect(() => {
        if (isLoading) {
            const myFunc = async () => {
                const { data, status } = await apiRouter
                    .get(`${zipCode}/json/`)
                    .then(result => result)
                    .catch(error => console.log(error.message));
                
                if (status === 200 && !data['erro']) {
                    const resultData = servicesMock?.result.length > 0 ? servicesMock.result : [];
                    if (resultData.length > 0) {
                        timeOut(resultData, '', 3000);
                    }
                } else {
                    timeOut([], 'Não há registros', 1000);
                }
            };
            myFunc();
        }
    }, [isLoading, zipCode])

    return(
        <section className="section">
            <div className="section-header">
                <h1 className="section-h1">Serviços</h1>
            </div>
            <BlockView
                image={picSmartphoneWithGpsNavigator}
                title="Busca por Atendimento"
                text="Verifique a disponibilidade dos profissionais próximos de sua região e agende sua consulta de forma rápida e prática."
                link="/agendamento"
            />
            <BlockView
                image={picFemaleVetDoctor}
                title="Profissionais Qualificados"
                text="Os profissionais da saúde animal estão sempre preparados e capacitados para atender seu animal."
                link="/home"
            />
            <hr className="hr-2" />
            <div className="grid-content">
                <h1 className="content-header">Busca rápida</h1>
                <form onSubmit={onClickSearch}>
                    <div className="grid-control">
                        <div className="input-box">
                            <input 
                                type="text" 
                                className="input-search" 
                                onChange={(event) => onZipCodeChange(event.target.value)}
                                value={zipCode}
                                placeholder="CEP de origem..."
                            />
                            {zipCode?.length > 0 &&
                            <button type="button" className="input-clean" onClick={() => onZipCodeClean()}>x</button>}
                        </div>
                        <button type="submit" className="button-search">
                            <BootstrapIcon cname="search" size="2" />
                        </button>
                    </div>
                </form>
                {(isLoading && results.length === 0) ? 
                <div className="grid-status">
                    <span className="status-message">{status}</span>
                    <div className="status-loader"></div>
                </div>
                :
                results.length > 0 ?
                <div className="grid-result">
                    <h2 className="grid-title">Resultados: {results.length}</h2>
                    {results.map((item, index) =>
                    <div className="grid-row" key={index}>
                        <div className="grid-col">
                            <div className="col-group">
                                <strong className="group-head">
                                    {item.type === 'vet' ? 'Veterinário(a):' : 'Clínica/Consultório:'}
                                </strong>
                                <span className="group-data">{item.fullname}</span>
                            </div>
                            <div className="col-group">
                                <strong className="group-head">CRMV:</strong>
                                <span className="group-data">{item.crmv}</span>
                            </div>
                            <div className="col-group">
                                <strong className="group-head">CEP:</strong>
                                <span className="group-data">{item.location.zipcode}</span>
                            </div>
                           <div className="col-group">
                                <strong className="group-head">Endereço:</strong>
                                <span className="group-data">{item.location.address}</span>
                            </div>
                            <div className="col-group">
                                <strong className="group-head">Bairro:</strong>
                                <span className="group-data">{item.location.district}</span>
                            </div>
                            <div className="col-group">
                                <strong className="group-head">Cidade:</strong>
                                <span className="group-data">{item.location.city} - {item.location.state}</span>
                            </div>
                        </div>
                        <div className="grid-col">
                            {item.schedules.map((obj, jndex) =>
                            <Fragment key={jndex}>
                                <div className="col-group">
                                    <strong className="group-head">Atendimento {(jndex + 1)}:</strong>
                                    <span className="group-data">{obj.weekday}</span>
                                </div>
                                {obj.hours.length > 0 && obj.hours.map((res, kndex) =>
                                <div className="col-group" key={kndex}>
                                    <strong className="group-head">Horário {(kndex + 1)}:</strong>
                                    <span className="group-data">{res.from} até {res.to}</span>
                                </div>)}
                            </Fragment>)}
                        </div>
                    </div>)}
                </div>
                :
                <div className="grid-status">
                    <span className="status-message">{status}</span>
                </div>
                }
            </div>
        </section>
    )
}

export default Home;
