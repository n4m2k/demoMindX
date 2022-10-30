import React from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Avatar, Typography, Button, LinearProgress } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import InputField from '../../components/InputField';
import PasswordField from '../../components/PasswordField';

const LoginForm = (props) => {
    const schema = yup.object().shape({
        identifier: yup.string()
            .required('Please enter your email.')
            .email('Please enter an valid email address.'),
        password: yup.string()
            .required('Please enter your password.')
    });
    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',
        },
        reValidateMode: 'onSubmit',
        resolver: yupResolver(schema)
    })
    const handleSubmit = async (values) => {
        const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(values);
        }
    }

    const { isSubmitting } = form.formState
    return (
        <div>
            {isSubmitting && <LinearProgress />}
            <Avatar>
                <LockOutlined />
            </Avatar>

            <Typography component="h3" variant="h5">
                Sign In
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="identifier" label="Email" form={form}></InputField>
                <PasswordField name="password" label="Password" form={form}></PasswordField>

                <Button
                    disabled={isSubmitting}
                    type="submit"

                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                >
                    Sign in
                </Button>
            </form>
        </div>
    )
}

export default LoginForm