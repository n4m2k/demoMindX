import { TextField } from '@mui/material';
import React, { useState } from 'react';

import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { Controller } from 'react-hook-form';

const PasswordField = (props) => {
    const { form, name, label } = props;
    const { control } = form;
    // const hasError = formState.touched[name] && errors[name];

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div>
            <Controller
                name={name}
                control={control}

                render={({ field: { onChange, onBlur, value, name, ref },
                    fieldState: { invalid, isTouched, error }
                }) => (
                    <>
                        <FormControl error={isTouched && invalid} fullWidth margin="normal" variant="outlined">
                            <InputLabel>{label}</InputLabel>
                            <OutlinedInput
                                id={name}
                                error={invalid}
                                type={showPassword ? 'text' : 'password'}
                                label={label}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={toggleShowPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                                value={value}
                                onBlur={onBlur}
                                onChange={onChange}
                            />
                        </FormControl>
                        <FormHelperText error={invalid}>{error?.message}</FormHelperText>
                    </>
                )}
            />
        </div>)
}

export default PasswordField