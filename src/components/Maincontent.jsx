import ProjetosContainer from './ProjetosContainer'
import SobreContainer from './SobreContainer'
import TecnologiasContainer from './TecnologiasContainer'

import '../styles/components/maincontent.sass'

const Maincontent = () => {
    return (
        <main id="main-content">
            <SobreContainer />
            <TecnologiasContainer />
            <ProjetosContainer />
        </main>
    )
}

export default Maincontent