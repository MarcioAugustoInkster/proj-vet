import { Link } from 'react-router-dom';
import './sign-in.scss'
import BootstrapIcon from '../../../components/icons/BootstrapIcon';

const SignIn = () => {
    const onSignInSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <section className="section-login">
            <div className="section-login__content">
                <div className="section-login__content__portrait">
                    <h1 className="section-login__content__portrait__text">Login</h1>
                </div>
                <div className="section-login__content__box">
                    <h1 className="section-login__content__box__title">Identificação de Usuário</h1>
                    <h4 className="section-login__content__box__sub-title">
                        Éis novo por aqui?
                        <Link to="/conta/cadastro" className="section-login__content__box__sub-title__link">Cadastre-se grátis</Link>.
                    </h4>
                    <form role="form" className="section-login__content__box__form" onSubmit={onSignInSubmit}>
                        <div className="section-login__content__box__form__group">
                            <input 
                                type="text" 
                                id="textloginuser"
                                className="input-login" 
                                placeholder="CPF ou E-mail"
                            />
                            <label htmlFor="textloginuser">
                                <BootstrapIcon cname="person-fill" size="2" styled={true} />
                            </label>
                        </div>
                        <div className="section-login__content__box__form__group">
                            <input
                                type="text" 
                                id="textloginpswd"
                                className="input-login"
                                placeholder="Senha"
                            />
                            <label htmlFor="textloginpswd">
                                <BootstrapIcon cname="lock-fill" size="2" styled={true} />
                            </label>
                        </div>
                        <div className="section-login__content__box__form__control">
                            <button type="submit" className="button-login">Entrar</button>
                        </div>
                    </form>
                    <div className="section-login__content__box__panel">
                        <Link to="/" className="section-login__content__box__panel__link">Esqueci minha senha</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignIn;
