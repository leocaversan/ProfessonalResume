import { ExperienceProps } from '../../../Props/props';
import style from './Experience.module.css';

const Experience = ({year, title, company}:ExperienceProps) => {
    return (
        <span>
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
        </span>
    );

};

export default Experience;