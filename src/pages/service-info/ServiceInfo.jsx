import './service-info.scss'
import equipVet from '../../assets/images/birds_group_vet_equip.jpg';
import greyParrot from '../../assets/images/african-grey-parrot.jpg';
import birdVetClinic from '../../assets/images/bird-vet-clinic.jpg';

const ServiceInfo = () => {
    return (
        <div className="section-vet">
            <h1 className="section-vet__vet-title">Profissionais Qualificados</h1>
            <div className="section-vet__vet-content">
                <div className="section-vet__vet-content__content-flex">
                    <div className="section-vet__vet-content__content-flex__content-image">
                        <img src={equipVet} alt="" width="100%" height="100%" />
                    </div>
                    <div className="section-vet__vet-content__content-flex__content-view">
                        <h1 className="section-vet__vet-content__content-flex__content-view__view-title">
                            Confiança e o Bem-estar
                        </h1>
                        <p className="section-vet__vet-content__content-flex__content-view__view-text">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                        </p>
                        <ul className="section-vet__vet-content__content-flex__content-view__view-list">
                            <li>
                                <span>Item Informativo 1</span>
                            </li>
                            <li>
                                <span>Item Informativo 2</span>
                            </li>
                            <li>
                                <span>Item Informativo 3</span>
                            </li>
                        </ul>
                        <p className="section-vet__vet-content__content-flex__content-view__view-text">
                        Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod <b>maxime placeat facere possimus</b>, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                        </p>
                        <p className="section-vet__vet-content__content-flex__content-view__view-text">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum <b>quia dolor</b> sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </p>
                    </div>
                </div>
                <div className="section-vet__vet-content__content-flex">
                    <div className="section-vet__vet-content__content-flex__content-image">
                        <img src={greyParrot} alt="" width="100%" height="100%" />
                    </div>
                    <div className="section-vet__vet-content__content-flex__content-view">
                        <h1 className="section-vet__vet-content__content-flex__content-view__view-title">
                            Saúde é prioridade
                        </h1>
                        <p className="section-vet__vet-content__content-flex__content-view__view-text">
                            At vero eos et accusamus et iusto <b>odio</b> dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                        </p>
                        <p className="section-vet__vet-content__content-flex__content-view__view-text">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa <b>quae ab illo inventore veritatis</b> et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div>
                </div>
                <div className="section-vet__vet-content__content-flex">
                    <div className="section-vet__vet-content__content-flex__content-image">
                        <img src={birdVetClinic} alt="" width="100%" height="100%" />
                    </div>
                    <div className="section-vet__vet-content__content-flex__content-view">
                        <h1 className="section-vet__vet-content__content-flex__content-view__view-title">
                            Ambiente e Conforto
                        </h1>
                        <p className="section-vet__vet-content__content-flex__content-view__view-text">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </p>
                        <p className="section-vet__vet-content__content-flex__content-view__view-text">
                            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum <b>necessitatibus</b> saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                        </p>
                        <p className="section-vet__vet-content__content-flex__content-view__view-text">
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis <b>praesentium voluptatum</b> deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceInfo;
