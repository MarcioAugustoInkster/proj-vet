import './vet-report.css';
import reportData from '../../../utils/report-mock.json';
import { Fragment, useEffect, useMemo, useState } from 'react';

const VetReport = () => {
    const [age, setAge] = useState(0);

    const calcAge = useMemo(() => {
        const currentDate = new Date();
        
        const currentYear = currentDate.getFullYear();
        const year = parseInt(reportData.data.birth_date.substring(6, 10));
        return currentYear - year;
    }, []);

    useEffect(() => {
        const getAge = calcAge;
        setAge(getAge);
    }, [calcAge]);

    return (
        <section className="section-report">
            <div className="section-header">
                <h1 className="section-h1">Histórico de Consultas</h1>
            </div>
            {reportData !== undefined ?
            <Fragment>
                <div className="report-view">
                    <div className="rep-row">
                        <div className="rep-col r-col-xl">
                            <strong className="col-title">Código:</strong>
                            <span className="col-text">{reportData.data.code}</span>
                        </div>
                        <div className="rep-col r-col-xl">
                            <strong className="col-title">Nome da Ave:</strong>
                            <span className="col-text">{reportData.data.pet_name}</span>
                        </div>
                        <div className="rep-col r-col-sm r-col-md">
                            <strong className="col-title">Gênero:</strong>
                            <span className="col-text">{reportData.data.gender === "m" ? "Macho" : "Fêmea"}</span>
                        </div>
                        <div className="rep-col r-col-sm r-col-md">
                            <strong className="col-title">Idade:</strong>
                            <span className="col-text">{age} {age > 1 ? 'Anos' : 'Ano'}</span>
                        </div>
                        <div className="rep-col r-col-md r-col-xl">
                            <strong className="col-title">Data de Aquisição:</strong>
                            <span className="col-text">{reportData.data.acquiring_date}</span>
                        </div>
                        <div className="rep-col r-col-xl">
                            <strong className="col-title">Mutação:</strong>
                            <span className="col-text">{reportData.data.mutation}</span>
                        </div>
                        <div className="rep-col r-col-md">
                            <strong className="col-title">Cores:</strong>
                            {reportData.data.colors.length > 0 ?
                            <ul className="col-list">
                                {reportData.data.colors.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                            : <span className="col-text">n/a</span>}
                        </div>
                        <div className="rep-col r-col-md">
                            <strong className="col-title">Peso:</strong>
                            <span className="col-text">{reportData.data.weight}g</span>
                        </div>
                        <div className="rep-col r-col-md">
                            <strong className="col-title">Largura:</strong>
                            <span className="col-text">{reportData.data.width}cm</span>
                        </div>
                        <div className="rep-col r-col-md">
                            <strong className="col-title">Altura:</strong>
                            <span className="col-text">{reportData.data.height}cm</span>
                        </div>
                        <div className="rep-col r-col-md">
                            <strong className="col-title">Comprimento:</strong>
                            <span className="col-text">{reportData.data.length}cm</span>
                        </div>
                        <div className="rep-col r-col-md">
                            <strong className="col-title">Tipo Sanguíneo:</strong>
                            <span className="col-text">{reportData.data.blood_type.length === 0 ? "n/a" : reportData.data.blood_type}</span>
                        </div>
                        <div className="rep-col r-col-xl">
                            <strong className="col-title">Alergias:</strong>
                            {reportData.data.allergies.length > 0 ?
                            <ul>
                                {reportData.data.allergies.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                            : <span className="col-text">n/a</span>}
                        </div>
                    </div>
                </div>
                <div className="content-view">
                    <table className="table-view">
                        {reportData.data.reports.map((item, index) =>
                        <Fragment key={index}>
                            <tbody>
                                <tr>
                                    <th>Consulta:</th>
                                    <td>{item.visit_code}</td>
                                </tr>
                                <tr>
                                    <th>Visita em:</th>
                                    <td>{item.visit_datetime}</td>
                                </tr>
                                <tr>
                                    <th>Check-ups:</th>
                                    <td>{item.general_checkup.map((res, jindex) =>
                                        <ul className="item-list" key={jindex}>
                                            <li>{res}</li>
                                        </ul>)}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Descrição:</th>
                                    <td>{item.pacient_prescribing}</td>
                                </tr>
                                <tr>
                                    <th>Exames:</th>
                                    <td>{item.exams.map((res, jindex) =>
                                        <ul className="item-list" key={jindex}>
                                            <li>{res}</li>
                                        </ul>)}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Sintomas:</th>
                                    <td>{item.symptoms.map((res, jindex) =>
                                        <ul className="item-list" key={jindex}>
                                            <li>{res}</li>
                                        </ul>)}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Medicações:</th>
                                    <td>{item.medicaments.map((res, jindex) =>
                                        <ul className="item-list" key={jindex}>
                                            <li>{res}</li>
                                        </ul>)}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Laboratório:</th>
                                    <td>{item.laboratory.length > 0 ? item.laboratory : "n/a"}</td>
                                </tr>
                                <tr>
                                    <th>Diagnóstico:</th>
                                    <td>{item.diagnosys.map((res, jindex) =>
                                        <ul className="item-list" key={jindex}>
                                            <li>{res}</li>
                                        </ul>)}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Notas Gerais:</th>
                                    <td>{item.general_infos.map((res, jindex) =>
                                        <ul className="item-list" key={jindex}>
                                            <li>{res}</li>
                                        </ul>)}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Resumo:</th>
                                    <td>{item.descriptions}</td>
                                </tr>
                                <tr>
                                    <th>Vacinas:</th>
                                    <td>{item.vaccines.length > 0 ?
                                        item.vaccines.map((res, jindex) =>
                                        <ul className="item-list" key={jindex}>
                                            <li>{res}</li>
                                        </ul>)
                                        : "n/a"}
                                    </td>
                                </tr>
                                <tr>
                                    <th>Com anel?</th>
                                    <td>{item.has_ring ? "Sim" : "Não"}</td>
                                </tr>
                                <tr>
                                    <th>Internação?</th>
                                    <td>{item.confirm_intern ? "Sim" : "Não"}</td>
                                </tr>
                                <tr>
                                    <th>Retorno?</th>
                                    <td>{item.confirm_return ? "Sim" : "Não"}</td>
                                </tr>
                            </tbody>
                        </Fragment>)}
                    </table>
                </div>
            </Fragment>
            : <span>Não existem dados de consultas</span>}
        </section>
    )
}

export default VetReport;
