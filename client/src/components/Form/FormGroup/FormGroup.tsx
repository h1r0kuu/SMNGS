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
    defaultValue?: string | Date | number
}

const FormGroupController: FC<FormGroupControllerProps> = ({type,
                                                     placeholder,
                                                     control,
                                                     error,
                                                     register,
                                                     name,
                                                     title,
                                                     defaultValue}): ReactElement => {
    return (
        <Controller name={name} control={control}
                    render={({field}) => (
                        <FormGroup className="form-group">
                            <FormLabel>{title}</FormLabel>
                            <Error error={error}/>
                            <Form.Control type={type} {...register(name)} placeholder={placeholder} defaultValue={defaultValue?.toString()}/>
                        </FormGroup>
                    )}
        />
    )
}

export default FormGroupController;