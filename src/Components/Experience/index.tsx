import { useEffect, useRef, useState } from 'react';
import { ExperienceProps } from '../../Props/props';
import style from './Experience.module.css';

const Experience = ({ year, title, company, isLast, start }: ExperienceProps) => {

    const observerExperience = useRef<any>(null);
    const [elementIsVisible, setElementIsVisible] = useState<boolean>();
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setElementIsVisible(entry.isIntersecting)
        })
        observer.observe(observerExperience.current);
    }, []);

    return (
        <span
            ref={observerExperience}
            className={elementIsVisible ? style.visible : style.not_visible}>
            <div className={style.time}>
                <div className={style.icon} />
                {year}
            </div>
            <div className={style.card}>

                <div className={style.connector} />

                <div className={style.content}>
                    <div className={style.title}>
                        {title}
                    </div>
                    <div className={style.company}>
                        {company}
                    </div>
                </div>
            </div>
            {
                isLast ?
                    <div className={style.time}>
                        <div className={style.icon_init} />
                        {start}
                    </div>
                    :
                    <span></span>
            }

        </span>
    );

};

export default Experience;