import { useEffect, useRef, useState } from 'react';
import style from './Home.module.css';

import MainCard from "../../Components/MainCard";
import Introduce from "../../Components/Introduce";
import Complement from "../../Components/Complement";
import Resume from "../../Components/Resume";
import Specializations from "../../Components/Specializations";
import Advantages from "../../Components/Advantages";

import { specializatiosData } from '../../data/data';

const Home = () => {

    const observerTime = useRef<any>(null);
    const [elementIsVisible, setElementIsVisible] = useState<boolean>();
    const [direction, setDirection] = useState<boolean>(false);


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setElementIsVisible(entry.isIntersecting)
        })
        observer.observe(observerTime.current);
    }, []);


    return (
        <div className={style.container}>

            <div className={style.main_card}>
                <MainCard />
            </div>
            <div className={style.content}>
                <div ref={observerTime}>
                    <Introduce />
                </div>
                <div className={style.content}>
                    <Complement
                        header={"Every exceptional codebase commences withan even more even more remarkeble narrative"}
                        description={"Breve description about the topic."}
                        isHeader={false}
                    />
                </div>
                <div className={style.content}>
                    <Resume />
                </div>
                <div className={style.content}>
                    <h1>
                        My Specializations
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
                        My Advantages
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
                            img={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"}
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
                            img={"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"}
                        />
                    </div>
                </div>



            </div>
        </div>
    )
}
export default Home;