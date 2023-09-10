import { Link } from 'react-router-dom';
import './navbar.scss';
import BootstrapIcon from '../../components/icons/BootstrapIcon';

const Navbar = () => {
    return(
        <header className="header">
            <Link to="/home">
                <span className="logo-img">VetServ</span>
            </Link>
            <nav className="header__nav">
                <ul className="header__nav__menu">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/conta/matricula">Matrícula</Link>
                    </li>
                </ul>
                <div className="header__nav__item">
                    <div className="header__nav__item__box">
                        <Link to="/conta/cadastro" className="header__nav__item__box__link">
                            <BootstrapIcon cname="person-circle" size="1" text="Cadastro" />
                            <span className="link-text">Cadastro</span>
                        </Link>
                    </div>
                    <div className="header__nav__item__box">
                        <Link to="/conta/login" className="header__nav__item__box__link">
                            <BootstrapIcon cname="lock" size="1" text="Login" />
                            <span className="link-text">Login</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
