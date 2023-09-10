import { InputTextRef, Select, TextArea } from '../../../components/input/InputText';
import { cockatielAges, cockatielMutations } from '../../../utils/catalog-info';
import './animal-enroll.scss';

const AnimalEnroll = () => {
    const cockatielGender = [
        {value: 'm', text: 'Macho'},
        {value: 'f', text: 'Fêmea'},
        {value: 'n', text: 'n/a'}
    ];

    const onEnrollSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <section className="section">
            <div className="section-header">
                <h1 className="section-h1">Cadastro de Animal</h1>
                <h4 className="section-h4">Preencha o formulário abaixo com dados de seu animal</h4>
                <div className="section-info">
                    <span className="info-danger">*</span>
                    <h4 className="info-h4">Campos obrigatórios</h4>
                </div>
            </div>
            <form role="form" className="form" onSubmit={onEnrollSubmit}>
                <div className="form-group">
                    <div className="f-row">
                        <div className="f-col f-col-lg">
                            <InputTextRef 
                                cid="textenrollname" 
                                icon="person"
                                pholder="Nome da Ave" 
                                required={true}
                            />
                        </div>
                        <div className="f-col f-col-sm">
                            <Select 
                                cid="selectenrollgender" 
                                items={cockatielGender} 
                                icon="gender-ambiguous" 
                                required={true}
                            />
                        </div>
                        <div className="f-col f-col-md">
                            <Select 
                                cid="selectenrollgroup" 
                                items={cockatielMutations} 
                                icon="clipboard-check" 
                                label="Mutação"
                                required={true}
                            />
                        </div>
                        <div className="f-col f-col-md">
                            <Select 
                                cid="selectenrollage" 
                                items={cockatielAges} 
                                icon="calendar2" 
                                label="Idade"
                                required={true}
                            />
                        </div>
                        <div className="f-col f-col-md">
                            <InputTextRef 
                                cid="textenrollheight" 
                                icon="arrows-expand"
                                pholder="Altura (cm)"
                            />
                        </div>
                        <div className="f-col f-col-md">
                            <InputTextRef 
                                cid="textenrollwidth" 
                                icon="arrows-angle-expand"
                                pholder="Largura (cm)"
                            />
                        </div>
                        <div className="f-col f-col-md">
                            <InputTextRef 
                                cid="textenrolllength" 
                                icon="arrows-collapse"
                                pholder="Comprimento (cm)"
                            />
                        </div>
                        <div className="f-col f-col-md">
                            <InputTextRef 
                                cid="textenrollweight" 
                                icon="rulers"
                                pholder="Peso (g)"
                            />
                        </div>
                        <div className="f-col f-col">
                            <TextArea pholder="Descreva as alergias..." />
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default AnimalEnroll;
