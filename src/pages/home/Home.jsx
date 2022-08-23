import '../../style/pages/home/home.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import GEP from '../../assets/carousel/GEP.png';
import LACEN from '../../assets/carousel/lacen.png';
import MINISTERIO from '../../assets/carousel/ministerio.png';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div id='home'>
            <Carousel className='carousel'>
                <div>
                    <img src={GEP} alt="Governo do Estado da Paraíba." />
                    <p className="legend">Governo do Estado da Paraíba.</p>
                </div>
                <div>
                    <img src={LACEN} alt="Lacen"/>
                    <p className="legend">Laboratório Central de Saúde Pública.</p>
                </div>
                <div>
                    <img src={MINISTERIO} alt="Ministério da Saúde." />
                    <p className="legend">Ministério da Saúde.</p>
                </div>
            </Carousel>
            <div className='buttonContainer'>
                <Link to='/cadastro'>
                    <button className='button'>
                        Cadastro
                    </button>
                </Link>
                <Link to='/lista-de-cadastrados'>
                    <button className='button'>
                        Lista de Cadastrados
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home;