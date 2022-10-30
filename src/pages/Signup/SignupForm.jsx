import React from 'react'
import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Avatar, Typography, Button, LinearProgress } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import InputField from '../../components/InputField';
import PasswordField from '../../components/PasswordField';


const SignupForm = (props) => {
    const schema = yup.object().shape({
        fullName: yup.string()
            .required('Vui lòng nhập thông tin.')
            .test('Tối thiểu phải nhập đủ Họ và Tên.', 'Vui lòng nhập đầy đủ Họ , Tên.', value => {
                return value.split(' ').length >= 2
            }),
        email: yup.string()
            .required('Vui lòng nhập email của bạn.')
            .email('Email của bạn không hợp lệ.'),
        password: yup.string()
            .required('Vui lòng nhập mật khẩu.')
            .min(6, 'Tối thiểu phải đủ 6 ký tự.'),
        retypePassword: yup.string()
            .required('Vui lòng nhập lại mật khẩu.')
            .oneOf([yup.ref('password')], 'Mật khẩu không hợp lệ.')

    });
    const form = useForm({
        defaultValue: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
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
            <Avatar>
                {isSubmitting && <LinearProgress />}
                <LockOutlined />
            </Avatar>
            <Typography component="h3" variant="h5" >
                Sign Up
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>

                <InputField name="fullName" label="Full Name" form={form}></InputField>
                <InputField name="email" label="Email" form={form}></InputField>
                <PasswordField name="password" label="Password" form={form}></PasswordField>
                <PasswordField name="retypePassword" label="Retype Password" form={form}></PasswordField>
                <Button
                    disabled={isSubmitting}
                    type="submit"

                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large">Sign Up</Button>
            </form>
        </div>
    )
}

export default SignupForm