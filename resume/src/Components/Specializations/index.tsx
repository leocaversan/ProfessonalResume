import { useEffect, useRef, useState } from 'react';
import { SpecializationsProps } from '../../Props/props';
import style from './Specializations.module.css';

const Specializations = ({header, description, projects, img}:SpecializationsProps) => {
    
    const observerRef = useRef<any>(null);
    const [elementIsVisible, setElementIsVisible] = useState<boolean>();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setElementIsVisible(entry.isIntersecting)
        })
        observer.observe(observerRef.current);
    }, []);
    
    return (
        <div
            ref={observerRef} 
            className={elementIsVisible ? style.container_visible : style.container_not_visible}>
            <div className={style.header}>
                <h1>
                    {header}
                </h1>
                <img src={img} alt="" />
            </div>
            <div className={style.description}>
                {description}
            </div>
            <div className={style.projects}>
                {projects}
            </div>
        </div>
    );
}
export default Specializations;