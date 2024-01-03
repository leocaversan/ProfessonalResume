import { useEffect, useRef, useState } from 'react';
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
                        header={"I am Leo, Software Developer and Data Analytics."}
                        description={"I realy love create new things."}
                        isHeader={true}
                    />
                </div>
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
                <div className={style.content}>
                    <Complement
                        header={"Every exceptional codebase commences withan even more even more remarkeble narrative"}
                        description={"Breve description about the topic."}
                        isHeader={false}
                    />
                </div>
                <div className={style.content}>
                    <div className={style.resume}>
                        <div className={style.resume_header}>
                            <h1>
                                Education<span className={style.color_text}>&</span> Experience
                            </h1>
                        </div>
                        <ul>
                            <Experience
                                year={'2024'}
                                title={'Junior Data Analytics.'}
                                company={'Deloitte'} />
                            <Experience
                                year={'2021'}
                                title={'Trainee Service Help Desk.'}
                                company={'CPFL.'} />
                        </ul>
                    </div>
                </div>
                <div className={style.content}>
                    <h1>
                        My <span className={style.color_text}>Specializations</span>
                    </h1>

                    {specializatiosData.map((specializations, index) => (

                        <div className={style.specializations}>
                            <Specializations
                                header={specializations.header}
                                description={specializations.description}
                                projects={specializations.projects}
                                img={undefined}
                            />
                        </div>
                    ))}

                    {/*
                        <div className={style.specializations}>
                            <Specializations
                                header={"Web Development"}
                                description={"Create web pages using framework like Angulas and react, with typescript or javascript"}
                                projects={"3 Projects"}
                                img={undefined} />
                        </div>
                     <div className={style.specializations}>
                        <Specializations
                            header={"Backend developement"}
                            description={"Create services using framework like flastAPI(Python), flask(Python), django(Python) and express(NodeJs) or http(Go)."}
                            projects={"5 Projects"}
                            img={undefined} />
                    </div>
                    <div className={style.specializations}>
                        <Specializations
                            header={"Data Analytics"}
                            description={"Create pipeline with Apache beam|PySpark, transform data with PySpark|Pandas, unsupervisioned and supervisioned machine learning in with MLib|Scikit-learn."}
                            projects={"3 Projects"}
                            img={undefined} />
                    </div> */}
                </div>
                <div className={style.content}>
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