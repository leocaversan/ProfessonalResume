import Experience from './Experience';
import style from './Resume.module.css';

const Resume = () => {
    return (
        <div className={style.container}>
            <h1>
                Education & Experience
            </h1>
            <ul>
                <Experience 
                    year={'2023'} 
                    title={'Future Software Engineer'} 
                    company={'Golden Boy Inc.'}/>
                <Experience 
                    year={'2023'} 
                    title={'Future Software Engineer'} 
                    company={'Golden Boy Inc.'}/>
            </ul>
        </div>
    );

};
export default Resume;