import { useState } from 'react';
import statesData from '../../../utils/states-mock.json';
import { cpfMask, phoneMask, telephoneMask, zpiCodeMask } from '../../../utils/FieldMask';
import { InputEmail, InputPassword, InputText, InputTextRef, Select } from '../../../components/input/InputText';
import Button from '../../../components/button/Button';

const UserRegister = () => {
    const [cpf, setCpf] = useState('');
    const [telephone, setTelephone] = useState('');
    const [phone, setPhone] = useState('');
    const [zipCode, setZipCode] = useState('');

    const onRegisterSubmit = (event) => {
        event.preventDefault();
    }

    const onCpfChange = (cpf) => {
        setCpf(cpfMask(cpf));
    }
    
    const onTelephoneChange = (phone) => {
        setTelephone(telephoneMask(phone));
    }
    
    const onPhoneChange = (phone) => {
        setPhone(phoneMask(phone));
    }

    const onZipCode = (zipCode) => {
        setZipCode(zpiCodeMask(zipCode));
    }

    return (
        <section className="section">
            <div className="section-header">
                <h1 className="section-h1">Cadastro de Cliente</h1>
                <h4 className="section-h4">Preencha o formulário abaixo para proseguir</h4>
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
                                cid="textregfullname" 
                                icon="person"
                                pholder="Nome Completo" 
                                required={true}
                            />
                        </div>
                        <div className="f-col f-col-12">
                            <InputEmail 
                                cid="emailregemail" 
                                icon="at"
                                pholder="E-mail" 
                                required={true}
                            />
                        </div>
                        <div className="f-col f-col-7">
                            <InputText 
                                cid="textreguserid" 
                                icon="person-badge"
                                value={cpf}
                                onChange={(event) => onCpfChange(event.target.value)}
                                pholder="CPF"
                            />
                        </div>
                        <div className="f-col f-col-6">
                            <InputText 
                                cid="textregtelephone" 
                                icon="telephone"
                                value={telephone}
                                onChange={(event) => onTelephoneChange(event.target.value)}
                                pholder="Telefone"
                            />
                        </div>
                        <div className="f-col f-col-6">
                            <InputText 
                                cid="textregphone" 
                                icon="phone"
                                value={phone}
                                onChange={(event) => onPhoneChange(event.target.value)}
                                pholder="Celular" 
                            />
                        </div>
                        <div className="f-col f-col-6">
                            <InputPassword 
                                cid="pswdreguserpswd" 
                                icon="lock"
                                pholder="Nova senha" 
                                required={true}
                            />
                        </div>
                        <div className="f-col f-col-6">
                            <InputPassword 
                                cid="pswdreguserpswdrpt" 
                                icon="lock"
                                pholder="Confirmar senha" 
                                required={true}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="f-row">
                        <div className="f-col f-col-5">
                            <InputText 
                                cid="textregzpicode"
                                value={zipCode}
                                onChange={(event) => onZipCode(event.target.value)}
                                icon="geo-alt"
                                pholder="CEP"
                            />
                        </div>
                        <div className="f-col f-col-8">
                            <InputTextRef 
                                cid="textregaddress" 
                                icon="signpost-split"
                                pholder="Endereço" 
                            />
                        </div>
                        <div className="f-col f-col-4">
                            <InputTextRef 
                                cid="textregaddnumber" 
                                icon="123"
                                pholder="Número" 
                            />
                        </div>
                        <div className="f-col f-col-6">
                            <InputTextRef 
                                cid="textreglocalref" 
                                icon="house"
                                pholder="Complemento" 
                            />
                        </div>
                        <div className="f-col f-col-6">
                            <InputTextRef 
                                cid="textregdistrict" 
                                icon="compass"
                                pholder="Bairro" 
                            />
                        </div>
                        <div className="f-col f-col-6">
                            <InputTextRef 
                                cid="textregcity" 
                                icon="geo"
                                pholder="Cidade" 
                            />
                        </div>
                        <div className="f-col f-col-6">
                            <Select 
                                items={statesData.states}
                                cid="selreguf" 
                                icon="globe-americas"
                                label="Estado"
                                pholder="Estado" 
                            />
                        </div>
                    </div>
                </div>
                <div className="form-panel">
                    <Button type="submit" text="Cadastrar" />
                </div>
            </form>
        </section>
    )
}

export default UserRegister;
