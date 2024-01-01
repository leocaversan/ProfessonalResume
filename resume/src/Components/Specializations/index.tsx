import { SpecializationsProps } from '../../Props/props';
import style from './Specializations.module.css';

const Specializations = ({header, description, projects, img}:SpecializationsProps) => {
    return (
        <div className={style.container}>
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