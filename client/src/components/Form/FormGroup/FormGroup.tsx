import React, {FC, ReactElement} from "react";

import styles from "./formgroup.module.css"
import {Form, FormGroup, FormLabel} from "react-bootstrap";
import Error from "../../Error/Error";
import {Controller, FieldError} from "react-hook-form";
import {Control, UseFormRegister} from "react-hook-form/dist/types/form";

interface FormGroupControllerProps {
    type: string,
    placeholder?: string,
    register: UseFormRegister<any>,
    control: Control<any>,
    error: FieldError | undefined,
    name: string,
    title: string,
    defaultValue?: string | Date | number,
    img?: string
}

const FormGroupController: FC<FormGroupControllerProps> = ({type,
                                                     placeholder,
                                                     control,
                                                     error,
                                                     register,
                                                     name,
                                                     title,
                                                     defaultValue,
                                                     img}): ReactElement => {
    return (
        <Controller name={name} control={control}
                    render={({field}) => (
                        <FormGroup className="form-group">
                            <FormLabel>{title}</FormLabel>
                            {img &&
                                <>
                                <br/>
                                <div className="avatar avatar-xxl">
                                    <img className="avatar-img rounded-circle" alt="User Image"
                                         src={img} />
                                </div>
                                </>
                            }
                            <Form.Control className={error ? "form-invalid" : ""} type={type} {...register(name)} placeholder={placeholder} defaultValue={defaultValue?.toString()}/>
                            <Error error={error}/>
                        </FormGroup>
                    )}
        />
    )
}

export default FormGroupController;