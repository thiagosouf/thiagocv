import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMongodb,
    DiMysql,
    DiPostgresql,
    DiReact,
} from 'react-icons/di'

import '../styles/components/tecnologiascontainer.sass'

const tecnologias = [
    { id: "html", name: "HTML5", icon: <DiHtml5 /> },
    { id: "css", name: "CSS3", icon: <DiCss3 /> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
    { id: "mongodb", name: "MongoDB", icon: <DiMongodb /> },
    { id: "mysql", name: "MySQL", icon: <DiMysql /> },
    { id: "postgresql", name: "Postgresql", icon: <DiPostgresql /> },
    { id: "react", name: "React", icon: <DiReact /> },
];


const TecnologiasContainer = () => {
    return (
        <section className="tecnologias-container">
            <h2>
                Tecnologias
            </h2>
            <div className="tecnologias-flex">
                {tecnologias.map((tech) => (
                    <div className="tecnologia-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="tecnologia-info">
                            <h3>{tech.name}</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TecnologiasContainer