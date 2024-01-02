import { imgProps } from '../../Props/props';
import style from './Advantages.module.css';

const Advantages = ({img}:imgProps) => {
    
    return (
        <div className={style.conteiner}>
                <img src={img} alt="" />
        </div>
    );
};
export default Advantages;