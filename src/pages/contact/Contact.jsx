import Button from '../../components/button/Button';
import { InputTextRef, TextArea } from '../../components/input/InputText';

const Contact = () => {
    const onRegisterSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <section className="section">
            <div className="section-header">
                <h1 className="section-h1">Contato</h1>
                <h4 className="section-h4">Tem alguma dúvida, sugestão ou reclamação? Contacte-nos abaixo</h4>
                <div className="section-info">
                    <span className="info-danger">*</span>
                    <h4 className="info-h4">Campos obrigatórios</h4>
                </div>
            </div>
            <form role="form" className="form" onSubmit={onRegisterSubmit}>
                <div className="form-group">
                    <div className="f-row">
                        <div className="f-col f-col-12">
                            <InputTextRef 
                                cid="textcttfullname" 
                                icon="person"
                                pholder="Seu nome" 
                                required={true}
                            />
                        </div>
                        <div className="f-col f-col-12">
                            <InputTextRef 
                                cid="textcttemail" 
                                icon="at"
                                pholder="Seu E-mail" 
                                required={true}
                            />
                        </div>
                        <div className="f-col f-col-12">
                            <TextArea
                                pholder="Digite sua mensagem..."
                                required={true}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-panel">
                    <Button type="submit" text="Enviar Mensagem" />
                </div>
            </form>
        </section>
    )
}

export default Contact