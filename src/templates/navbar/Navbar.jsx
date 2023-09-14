import { Link } from 'react-router-dom';
import './navbar.scss';
import BootstrapIcon from '../../components/icons/BootstrapIcon';

const Navbar = () => {
    const menu_items = [
        { text: 'Home', link: '/home' },
        { text: 'Contato', link: '/contato' },
        { text: 'Sobre', link: '/about' },
        { text: 'Matrícula', link: '/conta/matricula' },
    ];

    return(
        <header className="header">
            <Link to="/home" className="logo">VetServ</Link>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="navicon"></span>
            </label>
            <ul className="menu">
                {menu_items.map((item, index) =>
                <li key={index}>
                    <Link to={item.link}>{item.text}</Link>
                </li>)}
            </ul>
            <div className="item">
                <Link to="/conta/cadastro" className="item-link">
                    <BootstrapIcon cname="person-circle" size="1" />Cadastro
                </Link>
                <Link to="/conta/login" className="item-link">
                    <BootstrapIcon cname="lock" size="1" />Login
                </Link>
            </div>
        </header>
    )
}

export default Navbar;
