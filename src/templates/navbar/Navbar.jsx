import { Link } from 'react-router-dom';
import './navbar.scss';
import BootstrapIcon from '../../components/icons/BootstrapIcon';

const Navbar = () => {
    const menu_items = [
        { text: 'Home', link: '/home' },
        { text: 'Histórico', link: '/conta/historico-consultas' },
        { text: 'Contato', link: '/contato' },
        { text: 'Sobre', link: '/sobre' },
    ];
    const side_items = [
        { text: 'Cadastro', link: '/conta/cadastro', cname: 'person-circle' },
        { text: 'Login', link: '/conta/login', cname: 'lock' },
    ];

    const onCloseMenu = () => {
        document.getElementById('menu-btn').click();
    }

    return(
        <header className="header">
            <Link to="/home" className="logo" onClick={onCloseMenu}>VetServ</Link>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="navicon"></span>
            </label>
            <ul className="menu">
                {menu_items.map((item, index) =>
                <li key={index}>
                    <Link to={item.link} onClick={onCloseMenu}>{item.text}</Link>
                </li>)}
            </ul>
            <div className="item">
                {side_items.map((item, index) =>
                <Link to={item.link} className="item-link" onClick={onCloseMenu} key={index}>
                    <BootstrapIcon cname={item.cname} size="1" />{item.text}
                </Link>)}
            </div>
        </header>
    )
}

export default Navbar;
