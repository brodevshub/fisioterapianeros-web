import './toolBar.css'
import { Link } from 'react-router-dom'

export function Toolbar(){
    return(
        <div id="nav">
            <h1>Fisioterapia <img title="Logo Fisioterapia Neros" src="assets/_media/img/logo.png" alt="Logo Neros"></img>Neros</h1>
            <ul>
                <li><span className="icon-home3"></span><Link className="selectedNav" to="/">Inicio</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/tecnicas">Técnicas</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                <li><Link to="/noticias">Noticias</Link></li>
            </ul>
        </div>
    )
}