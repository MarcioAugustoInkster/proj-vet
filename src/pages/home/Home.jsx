import './home.css';
import BlockView from '../../components/block-view/BlockView';
import picFemaleVetDoctor from '../../assets/images/backgrounds/pet-vet-cockatiel-care.jpg';
import picSmartphoneWithGpsNavigator from '../../assets/images/backgrounds/smartphone-with-gps-navigator.jpg';
import BootstrapIcon from '../../components/icons/BootstrapIcon';
import { zpiCodeMask } from '../../utils/FieldMask';
import { useEffect, useState } from 'react';
import servicesMock from '../../utils/services-mock.json';
import { apiRouter } from '../../api/apiRouter';
import ResultView from '../../components/result-view/ResultView';

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
                        timeOut(resultData, '', 2000);
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
                title="Consulta de Atendimentos"
                text="Verifique a disponibilidade dos profissionais próximos de sua região e agende sua consulta de forma rápida e prática."
                link="/mobilidade"
            />
            <BlockView
                image={picFemaleVetDoctor}
                title="Profissionais Qualificados"
                text="Os profissionais da saúde animal estão sempre preparados e capacitados para atender seu animal."
                link="/atendimento"
            />
            <hr className="hr-2" />
            <div className="grid-content">
                <h1 className="content-h1">Busca rápida</h1>
                <h4 className="content-h4">Informe seu CEP abaixo para localizarmos as áreas mais próximas de sua região</h4>
                <form onSubmit={onClickSearch}>
                    <div className="flex">
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
                <div className="result-view">
                    <h2 className="result-title">Encontrado {results.length} resultados</h2>
                    <div className="view-grid">
                        {results.map((item, index) => <ResultView data={item} key={index} />)}
                    </div>
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
