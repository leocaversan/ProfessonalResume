import { useEffect, useRef, useState } from 'react';
import style from './About.module.css'
import { aboutProps } from '../../Props/props';



const About = ({year,unitOfMeasurement, description}:aboutProps) => {

    const observerDiv = useRef<any>(null);
    const [elementIsVisible, setElementIsVisible] = useState<boolean>();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setElementIsVisible(entry.isIntersecting)
        })
        observer.observe(observerDiv.current);
    }, []);

    return(
        <div
            ref={observerDiv}
            className={elementIsVisible ? style.conteiner_visible: style.conteiner_not_visible}>
            <div className={style.header}>
                <span className={style.color_text}>+{year}</span> <span className={style.text}>{unitOfMeasurement}</span>
            </div>
            <div className={style.describle}>
                {description}
            </div>
        </div>
    );
};
export default About;