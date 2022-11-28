import React, {FC, ReactElement} from "react";
import {Autocomplete, TextField} from "@mui/material";
import {Controller} from "react-hook-form";
import {Control} from "react-hook-form/dist/types/form";
import {FormGroup, FormLabel} from "react-bootstrap";

interface ControllerWithAutocompleteProps {
    title?: string,
    control: Control<any>,
    name: string,
    options: Readonly<any[]>
    getOptionLabel?: (option: any) => string
    defaultValue?: any,
    label?: string,
    placeholder?: string,
    multiple: boolean,
    value?: any,
    setValue?: (newValue: any) => void
    inputValue?: string,
    setInputValue?: (newValue: any) => void,
    onChange?: (newValue: any) => void
}

const ControllerWithAutocomplete: FC<ControllerWithAutocompleteProps> = ({title,
                                                                         control,
                                                                         name,
                                                                         options,
                                                                         getOptionLabel,
                                                                         defaultValue,
                                                                         label,
                                                                         placeholder,
                                                                         multiple,
                                                                         value,
                                                                         setValue,
                                                                         inputValue,
                                                                         setInputValue,
                                                                         onChange
                                                                         }): ReactElement => {
    const handleOnChange = (value, func) => {
        func(value)
        if(setValue)
            setValue(value)
        else
            return ''
    }
    const handleInputValue = (value) => {
        if(setInputValue)
            setInputValue(value)
        else
            return ''
    }
    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <FormGroup className="form-group">
                    {title &&
                        <FormLabel>{title}</FormLabel>
                    }
                <Autocomplete
                    multiple={multiple}
                    id="tags-outlined"
                    options={options}
                    getOptionLabel={getOptionLabel}
                    filterSelectedOptions
                    defaultValue={defaultValue}
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label={label}
                            placeholder={placeholder}
                        />
                    )}
                    inputValue={inputValue}
                    onInputChange={(e, v) => handleInputValue(v)}
                    onChange={(event, value) => handleOnChange(value, field.onChange)}
                    value={field.value || null}
                />
                </FormGroup>

            )}
        />
    )
}

export default ControllerWithAutocomplete