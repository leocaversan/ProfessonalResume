import { SubtopicsProps } from '../../Props/props';
import style from './SubTopics.module.css';

const SubTopics = ({descritive, img}:SubtopicsProps) => {
    return (
        <div className={style.conteiner}>
            <img src="" alt="" />
            <p>{descritive}</p>
        </div>
    );
};

export default SubTopics;