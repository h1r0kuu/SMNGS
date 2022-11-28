import React, {FC, ReactElement} from "react";
import {Control, UseFormRegister} from "react-hook-form/dist/types/form";
import {Controller, FieldError} from "react-hook-form";
import {Form, FormGroup, FormLabel} from "react-bootstrap";
import Error from "../../Error/Error";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {TextField} from "@mui/material";

interface ControllerWithDateTimeProps {
    register: UseFormRegister<any>,
    control: Control<any>,
    error: FieldError | undefined,
    name: string,
    title?: string,
}

const ControllerWithDateTime: FC<ControllerWithDateTimeProps> = ({ control,
                                                                   error,
                                                                   register,
                                                                   name,
                                                                   title,
                                                                 }): ReactElement => {
    return (
        <Controller name={name}
                    control={control}
                    render={({ field }) => (
                        <FormGroup className="form-group">
                            {title &&
                                <FormLabel>{title}</FormLabel>
                            }
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker
                                    renderInput={(props) => <TextField {...props} />}
                                    label={title}
                                    value={field.value}
                                    {...register(name)}
                                    onChange={field.onChange}
                                    className={"form-control"}
                                />
                            </LocalizationProvider>
                            <Error error={error}/>
                        </FormGroup>
                    )}
        />
    )
}

export default ControllerWithDateTime