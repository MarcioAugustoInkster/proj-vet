import './mobile-info.scss';
import mapLocation from '../../assets/images/map-location-information.jpg';
import vetMaps from '../../assets/images/vet-maps.jpg';
import birdVet from '../../assets/images/find-a-vet700x500.jpg';

const MobileInfo = () => {
  return (
    <div className="section">
      <div className="section-header">
        <h1 className="section-h1">Consulta de Atendimentos</h1>
      </div>
      <div className="section__location-content">
        <div className="section__location-content__flex-group">
          <div className="section__location-content__flex-group__group-block">
            <h1 className="section__location-content__flex-group__group-block__block-header">
              Economia de tempo
            </h1>
            <div className="section__location-content__flex-group__group-block__block-flex">
              <div className="section__location-content__flex-group__group-block__block-flex__image">
                <img src={mapLocation} alt="" width="100%" height="100%" />
              </div>
              <div className="section__location-content__flex-group__group-block__block-flex__text-group">
                <p className="section__location-content__flex-group__group-block__block-flex__text-group__block-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="section__location-content__flex-group__group-block__block-flex__text-group__block-text">
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                </p>
              </div>
            </div>
            <ul className="section__location-content__flex-group__group-block__block-list">
              <li>
                Acessibilidade móvel
              </li>
              <li>
                Clínicas e Veterinários
              </li>
              <li>
                Privacidade de Dados
              </li>
            </ul>
          </div>
          <div className="section__location-content__flex-group__group-block">
            <h1 className="section__location-content__flex-group__group-block__block-header">
              Economia de tempo
            </h1>
            <div className="section__location-content__flex-group__group-block__block-flex row-reverse">
              <div className="section__location-content__flex-group__group-block__block-flex__image">
                <img src={vetMaps} alt="" width="100%" height="100%" />
              </div>
              <div className="section__location-content__flex-group__group-block__block-flex__text-group">
                <p className="section__location-content__flex-group__group-block__block-flex__text-group__block-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className="section__location-content__flex-group__group-block__block-flex__text-group__block-text">
                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section__location-content__flex-group">
          <img src={birdVet} alt="" width="100%" height="100%" />
        </div>
        <hr className="hr-2" />
        <div className="section__location-content__flex-group">
          <h1 className="section__location-content__flex-group__group-header">Título Secundário</h1>
          <p className="section__location-content__flex-group__long-text">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
          </p>
          <p className="section__location-content__flex-group__long-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MobileInfo;
