import style from './Complement.module.css';

import { ComplementsProps } from '../../Props/props';
const Complement = ({header, description}:ComplementsProps) => {
    return (
        <div className={style.container}>
            <h1>
                {header}
            </h1>
            <p>
                {description}
            </p>
        </div>
    );

};

export default Complement;