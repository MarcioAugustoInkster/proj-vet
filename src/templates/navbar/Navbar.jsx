import { Link } from 'react-router-dom';
import './navbar.scss';
import BootstrapIcon from '../../components/icons/BootstrapIcon';
import { useState } from 'react';

const Navbar = () => {
    const [isChecked, setIsChecked] = useState(false);

    const menu_items = [
        { text: 'Home', link: '/home' },
        { text: 'Contato', link: '/contato' },
        { text: 'Sobre', link: '/about' },
        { text: 'Matrícula', link: '/conta/matricula' },
    ];

    const onMenuOpen = (event) => {
        setIsChecked(!event.target.checked);
    }

    return(
        <header className="header">
            <Link to="/home">
                <span className="logo-img">VetServ</span>
            </Link>
            <label htmlFor="navbtn" className="header__nav-control">
                <BootstrapIcon cname={`${isChecked ? 'x-lg' : 'list'}`} size="2" styled={false} />
            </label>
            <input type="checkbox" id="navbtn" className="header__nav-attr" onClick={onMenuOpen} hidden />
            <nav className="header__nav">
                <ul className="header__nav__menu">
                    {menu_items.map((item, index) =>
                    <li key={index}>
                        <Link to={item.link}>{item.text}</Link>
                    </li>)}
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
