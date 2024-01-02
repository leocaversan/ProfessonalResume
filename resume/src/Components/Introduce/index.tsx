import { useEffect, useRef, useState } from "react";
import Complement from "../Complement";
import style from "./Introduce.module.css";


const Introduce = () => {

    const observerTime = useRef<any>(null);
    const [elementIsVisible, setElementIsVisible] = useState<boolean>();
    console.log(elementIsVisible);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setElementIsVisible(entry.isIntersecting)
        })
        observer.observe(observerTime.current);
    }, []);

    return (
        <div className={style.conteiner}>
            <div className={style.header}>
                <Complement
                    header={"I am Leo, Software Developer and Data Analytics."}
                    description={"I realy love create new things."}
                    isHeader={true}
                />
            </div>
            <div
                ref={observerTime}
                className={elementIsVisible ? style.complement_visible : style.complement_not_visible}>
                <Complement
                    header={"3+"}
                    description={"Years of expêrience"}
                    isHeader={false}
                />
                <Complement
                    header={"10+"}
                    description={"Projects util now"}
                    isHeader={false}
                />
            </div>
        </div>
    );
};

export default Introduce;