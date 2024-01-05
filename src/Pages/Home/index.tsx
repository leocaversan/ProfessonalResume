import style from './Home.module.css';

import MainCard from "../../Components/MainCard";
import Complement from "../../Components/Complement";
import Specializations from "../../Components/Specializations";
import Advantages from "../../Components/Advantages";

import { specializatiosData } from '../../data/data';
import Experience from '../../Components/Experience';
import About from '../../Components/About';

const Home = () => {

    return (
        <div className={style.container}>

            <div className={style.main_card}>
                <MainCard />
            </div>
            <div className={style.content}>
                <div className={style.header}>
                    <Complement
                        header={"I am Leonardo, Software Developer and Data Analytics."}
                        description={"I realy love create new things."}
                        isHeader={true}
                    />
                    <div className={style.about}>
                        <About
                            year={'3'}
                            unitOfMeasurement={'Years'}
                            description={'Development software util now'}
                        />
                        <About
                            year={'10'}
                            unitOfMeasurement={'Projects'}
                            description={'development util now'}
                        />
                    </div>
                </div>
                <div className={style.content_2}>
                    <Complement
                        header={"Every exceptional codebase commences withan even more even more remarkeble narrative"}
                        description={"Highly accomplished Data Analytics professional with extensive experience in Extract, Transform, Load (ETL) processes utilizing Python, ACL, and Power BI. Proficient in developing microservices architecture using Python, GoLang, and Node, complemented by a solid background in web development with React and Angular using TypeScript. Proven ability to design and implement scalable data pipelines, ensuring accurate and streamlined data flow. Adept at collaborating with cross-functional teams, translating business requirements into effective technical solutions. Possesses a Bachelor's degree in Computer Science, accompanied by certifications in Data Analytics and Microservices Development. A skilled communicator and collaborative team player, consistently delivering results aligned with organizational goals."}
                        isHeader={false}
                    />
                </div>
                <div className={style.content_2}>
                    <div className={style.resume}>
                        <div className={style.resume_header}>
                            <h1>
                                Experience <span className={style.color_text}>&</span> Education
                            </h1>
                        </div>
                        <ul>
                            <Experience
                                year={'Jan - 2024'}
                                title={'Junior Data Analytics.'}
                                company={'Deloitte'}
                                isLast={false}
                                start={''} />
                            <Experience
                                year={'Nov - 2021'}
                                title={'Trainee Service Help Desk.'}
                                company={'CPFL.'}
                                isLast={true}
                                start={'2021'} />
                            <div className={style.education}>
                                <Experience
                                    year={'Present'}
                                    title={'Systems Analysis and Development'}
                                    company={'Instituto Federal de Educação, Ciência e Tecnologia de São Paulo.'}
                                    isLast={true}
                                    start={'2020'} />
                            </div>
                        </ul>
                    </div>
                </div>
                <div className={style.content_2}>
                    <h1>
                        My <span className={style.color_text}>Specializations</span>
                    </h1>

                    {specializatiosData.map((specializations, index) => (

                        <div className={style.specializations} key={index}>
                            <Specializations
                                header={specializations.header}
                                description={specializations.description}
                                projects={specializations.projects}
                                img={undefined}
                            />
                        </div>
                    ))}
                </div>
                <div className={style.content_2}>
                    <h1>
                        My <span className={style.color_text}>Advantages</span>
                    </h1>
                    <div className={style.adventages}>
                        <Advantages
                            img={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"}
                        />
                        <Advantages
                            img={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"}
                        />
                        <Advantages
                            img={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"}
                        />
                        <Advantages
                            img={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"}
                        />
                        <Advantages
                            img={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"}
                        />

                        <Advantages
                            img={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"}
                        />
                        <Advantages
                            img={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"}
                        />
                        <Advantages
                            img={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;