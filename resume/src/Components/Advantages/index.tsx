import { AdvantagesProps } from '../../Props/props';
import style from './Advantages.module.css';

const Advantages = ({img}:AdvantagesProps) => {
    return (
        <div className={style.conteiner}>
                <img src={img} alt="" />
        </div>
    );
};
export default Advantages;