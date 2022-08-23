import Logo from '../../assets/logoPB/GEPB.png';
import '../../style/navbar/navbar.scss';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div id="navbar">
            <div className="nav-container">
                <div className="logo">
                    <img src={Logo} alt="Logo do Governo do Governo do Estado da Paraíba." />
                </div>
                <div className="itens">
                    <ul>
                        <li>
                            <Link className='link' to='/home'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className='link' to='/cadastro'>
                                Cadastro
                            </Link>
                        </li>
                        <li>
                            <Link className='link' to='/lista-de-cadastrados'>
                                Lista de Cadastrados
                            </Link>
                        </li>
                    </ul> 
                </div>
            </div>
            <div className='colorRow'>
                <div className='colorOne'></div>
                <div className='colorTwo'></div>
                <div className='colorThree'></div>
                <div className='colorFour'>.</div>
            </div>
        </div>
    )
}

export default Navbar;