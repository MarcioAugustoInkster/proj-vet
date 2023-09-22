import { Link } from 'react-router-dom';
import './footer.css';
import BootstrapIcon from '../../components/icons/BootstrapIcon';
import footerData from '../../utils/footer-mock.json';

const Footer = () => {
  return (
    <div className="footer-container">
        <footer className="footer-flex">
            <div className="ft-column">
              <h4 className="ft-column-h">Informações</h4>
              <ul className="ft-list">
                {footerData.data.topics.map((item, index) =>
                <li key={index}>
                  <Link to={item.link} className="link">{item.text}</Link>
                </li>)}
              </ul>
            </div>
            <div className="ft-column">
              <h4 className="ft-column-h">Serviços</h4>
              <ul className="ft-list">
                {footerData.data.services.map((item, index) =>
                <li key={index}>
                  <Link to={item.link} className="link">{item.text}</Link>
                </li>)}
              </ul>
            </div>
            <div className="ft-column">
              <h4 className="ft-column-h">Mídias Sociais</h4>
              <ul className="ft-list">
                {footerData.data.medias.map((item, index) =>
                <li key={index}>
                  <Link to={item.link} className="list-link" target="_blank">
                    <BootstrapIcon cname={item.cname} size="2" />
                  </Link>
                </li>)}
              </ul>
            </div>
        </footer>
        <div className="footer-bar">
          <span>2023. VetServ - Projeto escolar.</span>
          <span>Desenvolvido por: <strong style={{color: '#ccc'}}>Marcio Augusto Schlosser</strong>.</span>
        </div>
    </div>
  )
}

export default Footer;
