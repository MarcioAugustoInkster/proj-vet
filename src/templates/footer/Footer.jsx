import { Link } from 'react-router-dom';
import './footer.css';
import BootstrapIcon from '../../components/icons/BootstrapIcon';

const Footer = () => {
  const socialMedias = [
    { name: "facebook", cname: "facebook", link: "https://www.facebook.com/marcio.augusto.731/" },
    { name: "linkedin", cname: "linkedin", link: "https://www.linkedin.com/in/marcio-schlosser-a52485136/" },
    { name: "github", cname: "github", link: "https://github.com/MarcioAugustoInkster/proj-vet" },
    { name: "youtube", cname: "youtube", link: "https://www.youtube.com/channel/UCzNvI7fPBfT6x6o-x3g1nJA" },
    { name: "discord", cname: "discord", link: "https://discord.com/users/Freakmas%20O'Freak#8647" },
  ];

  return (
    <div className="footer-container">
        <footer className="footer-flex">
            <div className="ft-column">
              <h4 className="ft-column-h">Informações</h4>
              <ul className="ft-list">
                <li>
                  <Link to="/sobre" className="link">Sobre</Link>
                </li>
              </ul>
            </div>
            <div className="ft-column">
              <h4 className="ft-column-h">Serviços</h4>
              <ul className="ft-list">
                <li>
                  <Link to="/conta/cadastro" className="link">Cadastro</Link>
                </li>
                <li>
                  <Link to="/contato" className="link">Matrícula Animal</Link>
                </li>
                <li>
                  <Link to="/contato" className="link">Contato</Link>
                </li>
              </ul>
            </div>
            <div className="ft-column">
              <h4 className="ft-column-h">Mídias Sociais</h4>
              <ul className="ft-list">
                {socialMedias.map((item, index) =>
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
