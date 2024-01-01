import style from './ButtonCardsContent.module.css'
const ButtonCardsContact = (
    img:any
) => {
    return (
        <div className={style.conteiner}>
            <img src={img} alt="" />
        </div>
    );
};

export default  ButtonCardsContact