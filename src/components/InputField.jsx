import { TextField } from '@mui/material';
import React from 'react'
    ;
import { Controller } from 'react-hook-form';

const InputField = (props) => {
    const { form, name, label, disabled } = props;
    return (
        <Controller
            name={name}
            control={form.control}
            render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
                <TextField
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    label={label}
                    error={invalid}
                    helperText={error?.message}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={name}
                    value={value}
                    disabled={disabled}
                />
            )}
        ></Controller>
    )
}

export default InputField