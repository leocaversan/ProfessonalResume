import { imgLinkProps } from '../../../Props/props';
import style from './ButtonCardsContent.module.css'

const ButtonCardsContact = ({img, functionOnClick}:imgLinkProps) => {
    return (
        <div 
            className={style.conteiner}
            onClick={functionOnClick}>
            <img src={img} alt="" />
        </div>
    );
};

export default  ButtonCardsContact