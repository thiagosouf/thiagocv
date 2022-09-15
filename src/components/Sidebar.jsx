import Perfil from "../img/perfil.jpeg"
import Socialnetworks from "./Socialnetworks"

import "../styles/components/sidebar.sass"

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Perfil} alt="Thiago Ferreira" />
            <p className="title">Desenvolvedor Web</p>
            <Socialnetworks />
            <p>informacões de contato</p>
            <a href="" className="btn">Download curriculo</a>

        </aside>
    )
}

export default Sidebar