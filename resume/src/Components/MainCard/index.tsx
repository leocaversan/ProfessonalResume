import style from './MainCard.module.css';
import ButtonCardsContact from './ButtonCardsContact';
// import ImageProfile  from '../../Assets/image_profile.jpeg';
const MainCard = () => {
    return (
        <div className={style.container}>

            <div className={style.header}>
                <div>
                    Moi, Leonardo
                </div>
                <div>
                    Software Developer
                </div>
            </div>
            <div className={style.image_profile}>
                <img src='' alt="" />
                {/* <img src={ImageProfile} alt="" /> */}
            </div>
            <div className={style.general_info}>
                <div>
                    Leonardo C. Moi
                </div>
                <div>
                    Paulinia-SP
                </div>
                <div>
                    <h1>
                        leocaversan7@gmail.com
                    </h1>
                </div>
            </div>
            <div className={style.buttons}>
                <ButtonCardsContact 
                    img={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'} 
                    functionOnClick={() => {
                        window.location.href = 'https://github.com/leocaversan'
                    }} 
                    />
                <ButtonCardsContact 
                    img={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg'} 
                    functionOnClick={() => {
                        window.location.href = 'https://www.linkedin.com/in/leonardo-caversan-moi/'
                    }}  
                    />
            </div>
            <div className={style.card_contact}>
                <button>
                    <img src="" alt="" />
                    Contact me
                </button>
            </div>
        </div>
    );
};

export default MainCard;