import {FC, ReactElement} from "react";

import styles from "./formgroup.module.css"

interface FormGroupProps {
    type: string,
    placeholder: string
}

const FormGroup: FC<FormGroupProps> = ({type, placeholder}): ReactElement => {
    return (
        <div className={styles.formGroup}>
            <input className={styles.formControl} type={type} placeholder={placeholder} />
        </div>
    )
}

export default FormGroup;