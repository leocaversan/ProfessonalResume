import Complement from "../Complement";
import style from "./Introduce.module.css";



const Introduce = () => {

    return (
        <div className={style.conteiner}>
            <div className={style.header}>
                <Complement
                    header={"I am Leo, Software Developer and Data Analytics."}
                    description={"I realy love create new things."}
                    isHeader={true}
                />
            </div>
            <div className={style.complement}>
                    <Complement
                        header={"3+"}
                        description={"Years of expêrience"}
                        isHeader={false}
                    />
                    <Complement
                        header={"10+"}
                        description={"Projects util now"}
                        isHeader={false}
                    />
            </div>
        </div>
    );
};

export default Introduce;