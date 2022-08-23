import '../.. /../../style/footer/footer.scss';
import Logo from '../../assets/logoPB/GEPB.png';
import CODATA from '../../assets/footer/Codata.svg';
import SIC from '../../assets/footer/SIC.png';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <div id="footer">
            <div className='colorRow'>
                <div className='colorOne'></div>
                <div className='colorTwo'></div>
                <div className='colorThree'></div>
                <div className='colorFour'>.</div>
            </div>
            <div className='SocialRow'>
                <div className='SocialFollow'>
                    <h4>Siga nas Redes Sociais:</h4>
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/GovernoParaiba">
                                <FaFacebookF className='icons' />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/govparaiba">
                                <FaTwitter className='icons' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/govparaiba/">
                                <FaInstagram className='icons' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/GovParaiba">
                                <FaYoutube className='icons' />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='SocialImage'>
                    <a href="https://codata.pb.gov.br/">
                        <img src={CODATA} alt="CODATA." />
                    </a>
                    <a href="https://paraiba.pb.gov.br/">
                        <img src={Logo} alt="Governo da Paraíba." />
                    </a>
                </div>
            </div>
            <div className='LinksRow'>
                <ul className='links'>
                    <li>
                        <a href="https://paraiba.pb.gov.br/noticias">
                            NOTÍCIAS
                        </a>
                    </li>
                    <li>
                        <a href="https://paraiba.pb.gov.br/governadoria">
                            GOVERNADORIA
                        </a>
                        <ul>
                            <li>
                                <a 
                                className='governadoria' 
                                href="https://paraiba.pb.gov.br/governadoria/governador-1">
                                    GOVERNADOR
                                </a>
                            </li>
                            <li>
                                <a 
                                className='governadoria' 
                                href="https://paraiba.pb.gov.br/governadoria/vice-governadora-1">
                                    Vice-Governador
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://portaldacidadania.pb.gov.br/">
                            SERVIÇOS
                        </a>
                    </li>
                    <li>
                        <a href="https://paraiba.pb.gov.br/links-uteis">
                            LINKS ÚTEIS
                        </a>
                    </li>
                    <li>
                        <a href="https://paraiba.pb.gov.br/contatos">
                            CONTATOS
                        </a>
                    </li>
                    <li>
                        <a href="https://webmail.pb.gov.br/">
                            WEBEMAIL
                        </a>
                    </li>
                    <li>
                        <a href="https://paraiba.pb.gov.br/diretas/saude/coronavirus/">
                            CORONAVÍRUS
                        </a>
                    </li>
                    <li>
                        <a href="http://www.redesim.pb.gov.br/">
                            JUCEP DIGITAL
                        </a>
                    </li>
                </ul>
            </div>
            <div className='LinksRow'>
                <ul className='links'>
                    <li>
                        <a href="https://paraiba.pb.gov.br/oportunidade-paraiba">
                            OPORTUNIDADE PARAÍBA
                        </a>
                    </li>
                    <li>
                        <a href="https://paraiba.pb.gov.br/fakenao">
                            FAKE NÃO
                        </a>
                    </li>
                    <li>
                        <a href="https://paraiba.pb.gov.br/medidas-contra-a-covid-19">
                            MEDIDAS CONTRA COVID-19
                        </a>
                    </li>
                    <li>
                        <a href="https://sites.google.com/view/leialdirblancpb">
                            LEI ALDIR BLANC
                        </a>
                    </li>
                    <li>
                        <a href="https://paraiba.pb.gov.br/arquivos/pdfs/estrategia-de-governo-digital-da-paraiba.pdf">
                            EGD
                        </a>
                    </li>
                    <li>
                        <a href="https://paraiba.pb.gov.br/censo-da-pessoa-com-deficiencia-pb">
                            CENSO DA PESSOA COM DEFICIÊNCIA
                        </a>
                    </li>
                </ul>
            </div>
            <div className='AddressRow'>
                <p>Centro Administrativo Estadual – Avenida Dr. João da Mata, nº 200 – Jaguaribe – João Pessoa/PB - CEP: 58015-900</p>
                <p>Telefones: (83) 36125600/ 36125601/ 36125602</p>
                <a href="https://sic.pb.gov.br/">
                    <img src={SIC} alt="Serviço de Informação ao Cidadão." />
                </a>
            </div>
        </div>
    )
}

export default Footer;