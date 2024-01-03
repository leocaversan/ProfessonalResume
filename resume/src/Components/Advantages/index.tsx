import { useEffect, useRef, useState } from 'react';
import { imgProps } from '../../Props/props';
import style from './Advantages.module.css';

const Advantages = ({img}:imgProps) => {
    
    const observerRender = useRef<any>(null);
    const [elementIsVisible, setElementIsVisible] = useState<boolean>();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setElementIsVisible(entry.isIntersecting)
        })
        observer.observe(observerRender.current);
    }, []);

    return (
        <div 
            ref={observerRender}
            className={elementIsVisible ? style.conteiner_visible:style.conteiner}>
                <img src={img} alt="" />
        </div>
    );
};
export default Advantages;