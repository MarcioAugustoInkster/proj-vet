import './not-found.css';
import LinkButton from '../../components/link-button/LinkButton';

const NotFound = () => {
    return(
        <section className="section-nf">
            <LinkButton href="/home" text="retornar ao início" hasArrow="true" />
            <div className="nf-panel-bg"></div>
            <h1 className="nf-title-xl">404</h1>
            <h4 className="nf-title-md">Esta página não está disponível</h4>
        </section>
    )
}

export default NotFound;
